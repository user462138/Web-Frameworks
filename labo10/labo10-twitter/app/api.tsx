//hide-start
import { useState, useEffect } from "react";
interface tweetProps {
    id: number
    handle: string
    text: string
    createdOn: string
}

//hide-end
const Tweets = () => {
    const [tweets, setTweets] = useState<tweetProps[]>([]);

    useEffect(() => {
        const fetchFunction = async() => {
            let result = await fetch("https://my-json-server.typicode.com/similonap/twitter-json-server/tweets");
            let json : tweetProps [] = await result.json(); 

            setTweets(json);
        }
        fetchFunction();
    },[]);

    return (
        <>
            {tweets.map( tweet =>
                <ul>
                    <li>id: {tweet.id}</li>
                    <li>handle: {tweet.handle}</li>
                    <li>text: {tweet.text}</li>
                    <li>createdOn: {tweet.createdOn}</li>
                </ul>
            )}

        </>
    );
}
//hide-start
export default Tweets;
//hide-end