import { useState } from 'react';
import Linkbar from './Linkbar';
import Main from './Main';


export default function Home() {
    const [loading, setLoading] = useState(false);

    const [tweets, setTweets] = useState([{}]);

    const [icon, setIcon] = useState('https://i.imgur.com/b8fNcS2.png');

    return (
        <div id="content">
            <Linkbar icon={icon}
                setIcon={setIcon} />

            <Main loading={loading}
                setLoading={setLoading}
                tweets={tweets}
                setTweets={setTweets} 
                icon={icon}
                setIcon={setIcon} />
        </div>
    )
}