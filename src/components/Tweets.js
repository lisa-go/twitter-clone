import Badges from './Badges';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Tweets({ loading, tweets, setTweets, update, setTop }) {

    const defaultIcon = (e) => {
        e.target.src = 'https://i.imgur.com/b8fNcS2.png';
    }

    const [updateRT, setUpdateRT] = useState(false);

    const [updateL, setUpdateL] = useState(false);

    function settingTop() {
        const copy = tweets.splice(0);
        copy.sort((a, b) => a.likes - b.likes).reverse();
        const toptw = copy.slice(0, 5);
        setTop(toptw)
    }

    async function getTweets() {
        const Response = await axios.get('http://localhost:8080/home')
        setTweets(Response.data);
        console.log(Response.data);
        settingTop()
    }

    useEffect(() => {
        getTweets()
    }, [update, updateRT, updateL]);

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
                                <div>• {tw.date}</div>
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