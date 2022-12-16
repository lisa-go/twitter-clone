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

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sint numquam quas! Sapiente omnis excepturi nostrum et. Cupiditate, molestiae corrupti, est reiciendis, praesentium dolorem beatae repudiandae odio animi numquam labore.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, cumque! Fuga quasi nesciunt tenetur quis, blanditiis inventore libero quos consequuntur corrupti velit accusamus harum magnam assumenda sunt animi unde minima?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe dolorem esse earum ullam numquam! Eligendi nihil velit quasi exercitationem odit, quisquam ut laboriosam eveniet nesciunt! Nesciunt sapiente officia labore voluptatibus?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus exercitationem qui soluta libero. Cum iusto excepturi similique nemo rem cupiditate repudiandae, modi perferendis fugit numquam qui accusantium nihil fugiat eum?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, ipsa? Qui, error. Atque quisquam fugiat omnis mollitia inventore, fugit consequatur obcaecati qui ex in. Culpa vitae facilis animi recusandae saepe.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum inventore recusandae nulla atque quod, a, temporibus dolores error fugit ea reprehenderit eveniet veritatis, nihil consequatur. Nemo dolore eius et voluptatibus?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos quaerat commodi sit veniam ducimus reiciendis dicta odio tenetur quis, id natus quasi, dolorem molestias velit quibusdam? Quidem eum asperiores itaque.
        </div>

    )
}