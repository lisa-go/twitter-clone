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
                        <div>{dt.character}</div>
                        <div>{dt.quote}</div>
                    </div>
                )}
        </div>

    )
}