import Badges from './Badges';
import axios from 'axios';
import { useState, useEffect } from 'react';
var moment = require('moment');

export default function Tweets({ loading, tweets, setTweets, update, setTop, top }) {

    const defaultIcon = (e) => {
        e.target.src = 'https://i.imgur.com/b8fNcS2.png';
    }

    const [updateRT, setUpdateRT] = useState(false);

    const [updateL, setUpdateL] = useState(false);

    const [updateTop, setUpdateTop] = useState(false);

    function settingTop() {
        const copy = tweets.splice(0);
        copy.sort((a, b) => a.likes - b.likes).reverse();
        setTop(copy);
    }

    async function getTweets() {
        const Response = await axios.get('http://localhost:8080/home')
        setTweets(Response.data);
        console.log(Response.data);
        settingTop();  
    }

    useEffect(() => {
        getTweets();
        
    }, [update, updateRT, updateL, updateTop]);

    useEffect(() => {
        const timeout = setTimeout(() => setUpdateTop(!updateTop), 200);
        return () => clearTimeout(timeout);
    }, []);

    return (

        <div id="tweetsContainer">
            <span className="endtwt">• No more tweets •</span>

            {loading ?
                <div>loading...</div>
                :
                tweets.map((tw) =>
                    <div className="tweet" key={tw.pusername + tw._id + tw.date}>
                        <div className="picture">
                            <img src={tw.picon} alt={tw.pname} onError={defaultIcon} />
                        </div>

                        <div className="text">
                            <div className="twtHead">
                                <div className="twtName">{tw.pname}</div>
                                <div>{tw.pusername}</div>
                                <div>• {moment(tw.date).fromNow()}</div>
                            </div>

                            <div className="twtContent">{tw.twtcontent}</div>

                            <Badges key={tw._id}
                                tw={tw}
                                updateRT={updateRT}
                                setUpdateRT={setUpdateRT}
                                updateL={updateL}
                                setUpdateL={setUpdateL} />

                        </div>
                    </div>



                )}
        </div>

    )
}