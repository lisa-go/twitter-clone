import { useState, useEffect } from 'react';
import axios from 'axios';
import { FiMessageCircle } from 'react-icons/fi';
import { FiRepeat } from 'react-icons/fi';
import { HiOutlineHeart, HiOutlineUpload } from 'react-icons/hi';

export default function Tweets ({ loading, setLoading, data, setData }) {
    useEffect(() => {
        setLoading(true);
        axios({
            method: 'GET',
            url: 'http://localhost:8080/home'
        })
            .then(Response => {
                setData(Response.data);
                console.log(Response.data);
            })
            .catch(Error => { console.log(Error) })
            .finally(() => { setLoading(false) })
           
    }, []);



    return (

        <div id="tweetsContainer">
            {loading ?
                <div>loading...</div>
                :
                data.map((dt) =>
                    <div className="tweet" key={dt._id}>
                        <div className="picture">
                            <img src={dt.picon} alt={dt.pname} />
                        </div>

                        <div className="text">
                            <div className="twtHead">
                                <div className="twtName">{dt.pname}</div>
                                <div>{dt.pusername}</div>
                                <div>• {dt.date}</div>
                            </div>
                            
                            <div className="twtContent">{dt.twtcontent}</div>

                            <div className="twtBadges">
                                <div className="blue">
                                    <FiMessageCircle size={18.75} />
                                    <span>{dt.replies}</span>
                                </div>

                                <div className="green">
                                    <FiRepeat size={18.75} />
                                    <span>{dt.retweets}</span>
                                </div>
                                
                                <div className="pink">
                                    <HiOutlineHeart size={18.75} />
                                    <span>{dt.likes}</span>
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