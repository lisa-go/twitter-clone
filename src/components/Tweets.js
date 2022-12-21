import { useState, useEffect } from 'react';
import axios from 'axios';
import { FiMessageCircle } from 'react-icons/fi';
import { FiRepeat } from 'react-icons/fi';
import { HiOutlineHeart, HiOutlineUpload } from 'react-icons/hi';

export default function Tweets ({ loading, setLoading, tweets, setTweets }) {
    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:8080/home')
            .then(Response => {
                setTweets(Response.data);
                console.log(Response.data);
            })
            .catch(Error => { console.log(Error) })
            .finally(() => { setLoading(false) })
           
    }, []);

    const defaultIcon = (e) => {
        e.target.src = 'https://i.imgur.com/b8fNcS2.png';
    }

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

                            <div className="twtBadges">
                                <div className="blue">
                                    <FiMessageCircle size={18.75} />
                                    <span>{tw.replies}</span>
                                </div>

                                <div className="green">
                                    <FiRepeat size={18.75} />
                                    <span>{tw.retweets}</span>
                                </div>
                                
                                <div className="pink">
                                    <HiOutlineHeart size={18.75} />
                                    <span>{tw.likes}</span>
                                </div>
                                
                                <div className="blue">
                                    <HiOutlineUpload size={18.75} />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                )}
        </div>

    )
}