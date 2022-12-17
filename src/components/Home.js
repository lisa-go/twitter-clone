import { useState } from 'react';
import Linkbar from './Linkbar';
import Main from './Main';


export default function Home() {
    const [loading, setLoading] = useState(false);

    const [data, setData] = useState([{}]);

    return (
        <div id="content">
            <Linkbar />

            <Main loading={loading}
                setLoading={setLoading}
                data={data}
                setData={setData} />
        </div>
    )
}