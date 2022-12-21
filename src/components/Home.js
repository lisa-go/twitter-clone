import { useState } from 'react';
import Linkbar from './Linkbar';
import Main from './Main';


export default function Home() {
    const [loading, setLoading] = useState(false);

    const [tweets, setTweets] = useState([{}]);

    const [icon, setIcon] = useState('https://i.imgur.com/b8fNcS2.png');

    const [name, setName] = useState('');

    const [username, setUsername] = useState('');

    return (
        <div id="content">
            <Linkbar icon={icon}
                name={name}
                username={username}
                 />

            <Main loading={loading}
                setLoading={setLoading}
                tweets={tweets}
                setTweets={setTweets} 
                icon={icon}
                setIcon={setIcon} 
                setName={setName}
                setUsername={setUsername} />
        </div>
    )
}