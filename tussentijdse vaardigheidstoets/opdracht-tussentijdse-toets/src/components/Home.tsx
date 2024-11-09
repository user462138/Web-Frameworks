import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <>
            <h1>Welkom Iedereen </h1>
            <p>Kies welke oefening je wil zien:</p>
            <ul>
                <li><Link to="opdracht-1">Opdracht-1</Link></li>
                <li><Link to="opdracht-2">Opdracht-2</Link></li>
                <li><Link to="opdracht-3">Opdracht-3</Link></li>
            </ul>
        </>
    );
}