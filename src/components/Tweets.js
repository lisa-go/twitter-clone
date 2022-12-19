import { useState, useEffect } from 'react';
import axios from 'axios';

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
                                <span>{dt.replies}</span>
                                <span>{dt.retweets}</span>
                                <span>{dt.likes}</span>
                                <span>badge4</span>
                            </div>
                        </div>
                    </div>
                )}

        </div>

    )
}