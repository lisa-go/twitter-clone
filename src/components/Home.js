import { useState } from 'react';
import Discover from './Discover';
import Linkbar from './Linkbar';
import Tweets from './Tweets';

export default function Home() {
    const [loading, setLoading] = useState(false);

    const [data, setData] = useState([{}]);

    return (
        <div id="content">
            <Linkbar />

            <div id="main">
                <Tweets loading={loading}
                    setLoading={setLoading}
                    data={data}
                    setData={setData} />

                <Discover />
            </div>
        </div>
    )
}