import Tweet from './Tweet';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Tweets ({ loading, tweets, setTweets }) {

    const [updateRT, setUpdateRT] = useState(false);

    const [updateL, setUpdateL] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8080/home')
            .then(Response => {
                setTweets(Response.data);
                console.log(Response.data);
            })
            .catch(Error => { console.log(Error) })
    }, [updateRT, updateL]);



    return (

        <div id="tweetsContainer">
            <span className="endtwt">• No more tweets •</span>
            
            {loading ?
                <div>loading...</div>
                :
                tweets.map((tw) =>
                    <Tweet key={tw.pusername + tw._id + tw.date}
                    tw={tw} 
                    updateRT={updateRT}
                    setUpdateRT={setUpdateRT} 
                    updateL={updateL}
                    setUpdateL={setUpdateL} />
                )}
        </div>

    )
}