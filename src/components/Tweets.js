import Badges from './Badges';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Tweets ({ loading, tweets, setTweets, update }) {

    const defaultIcon = (e) => {
        e.target.src = 'https://i.imgur.com/b8fNcS2.png';
    }

    const [updateRT, setUpdateRT] = useState(false);

    const [updateL, setUpdateL] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8080/home')
            .then(Response => {
                setTweets(Response.data);
                console.log(Response.data);
            })
            .catch(Error => { console.log(Error) })
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