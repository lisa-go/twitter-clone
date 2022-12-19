import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Tweets ({ loading, setLoading, data, setData }) {
    useEffect(() => {
        setLoading(true);
        axios({
            method: 'GET',
            url: 'https://animechan.vercel.app/api/quotes/anime?title=Hunter%20x%20hunter'
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
                    <div className="tweet">
                        <div className="picture">img</div>

                        <div className="text">
                            <div className="twtHead">
                                <div className="twtName">{dt.character}</div>
                                <div>@{dt.character}</div>
                                <div>• time</div>
                            </div>
                            
                            <div className="twtContent">{dt.quote}</div>

                            <div className="twtBadges">
                                <span>badge1</span>
                                <span>badge2</span>
                                <span>badge3</span>
                                <span>badge4</span>
                            </div>
                        </div>
                    </div>
                )}

        </div>

    )
}