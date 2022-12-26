import Badges from './Badges';
import axios from 'axios';
import { useState, useEffect } from 'react';
import cat0 from "../images/cat(0).png";
import cat1 from "../images/cat(1).png";
import cat2 from "../images/cat(2).png";
import cat3 from "../images/cat(3).png";
import cat4 from "../images/cat(4).png";
import cat5 from "../images/cat(5).png";
import cat6 from "../images/cat(6).png";
import cat7 from "../images/cat(7).png";
import cat8 from "../images/cat(8).png";
import cat9 from "../images/cat(9).png";

var moment = require('moment');

export default function Tweets({ loading, tweets, setTweets, update, setTop }) {

    const defaultImages = [cat0, cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9]

    const defaultIcon = (e) => {
        let pic = Math.floor(Math.random() * 10);
        e.target.src = defaultImages[pic];
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
        const Response = await axios.get('https://wild-lime-magpie-yoke.cyclic.app/home')
        setTweets(Response.data);
        settingTop();
    }

    useEffect(() => {
        getTweets();
    }, [update, updateRT, updateL, updateTop]);

    useEffect(() => {
        const timeout = setTimeout(() => setUpdateTop(!updateTop), 1000);
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