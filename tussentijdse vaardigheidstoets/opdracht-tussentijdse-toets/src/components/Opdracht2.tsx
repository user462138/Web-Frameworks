import { useEffect, useState } from "react";
import { SteamGame } from "../types";

export const Opdracht2 = () => {
    const [steamGames, setSteamGames] = useState<SteamGame[]>([]);
    const [searchField, setSearchField] = useState("");
    const [loading, setLoading] = useState<boolean>(false);
    const [filterPlatform, setFilterPlatform] = useState<string>("windows");

    useEffect(() => {
        const fetchFunction = async () => {
            setLoading(true);
            let result = await fetch("https://raw.githubusercontent.com/similonap/json/refs/heads/master/steam.json");
            let json = await result.json();
            setSteamGames(json);
            setLoading(false);
        }
        fetchFunction();
    }, []);

    //.filter(platform => (platform)  == (filterPlatform) )

    let filteredSteamGames = steamGames.filter(item => item.name.toUpperCase().startsWith(searchField.toUpperCase()));


    return (
        <>
            {loading && <div>Laden...</div>}
            <h1>Oefening 2</h1>
            <p>{filteredSteamGames.length} resultaten</p>
            <div>
                <label>Filter: </label>
                <input placeholder="search" type="text" value={searchField} onChange={(event) => setSearchField(event.target.value)} />
                <br />
                <label>Platforms:</label>
                <input type="radio" name="platform" value="windows" checked={filterPlatform === "windows"} onChange={(event) => setFilterPlatform(event.target.value)} /> Windows
                <input type="radio" name="platform" value="mac" checked={filterPlatform === "mac"} onChange={(event) => setFilterPlatform(event.target.value)} /> Mac
                <input type="radio" name="platform" value="linux" checked={filterPlatform === "linux"} onChange={(event) => setFilterPlatform(event.target.value)} /> Linux
            </div>
            <div>
                {filteredSteamGames.map(gmae => <div><img src={gmae.image} alt="" /></div>)}
            </div>
        </>
    );
} 