import { useState } from 'react';
import Linkbar from './Linkbar';
import Main from './Main';
import Compose from './Compose';


export default function Home() {
    const [loading, setLoading] = useState(false);

    const [tweets, setTweets] = useState([{}]);

    const [icon, setIcon] = useState('https://i.imgur.com/b8fNcS2.png');

    const [name, setName] = useState('Name');

    const [username, setUsername] = useState('@Username');

    const [isModal, setIsModal] = useState(false);

    return (
        <div id="content">
            <Linkbar icon={icon}
                name={name}
                username={username}
                isModal={isModal}
                setIsModal={setIsModal}
                 />

            <Main loading={loading}
                setLoading={setLoading}
                tweets={tweets}
                setTweets={setTweets} 
                icon={icon}
                setIcon={setIcon} 
                setName={setName}
                setUsername={setUsername}
                isModal={isModal} />

            {isModal ? 
            <div id="modal"> 
                <div className="modalContainer">
                    <Compose
                    setTweets={setTweets}
                    icon={icon}
                    setIcon={setIcon}
                    setName={setName}
                    setUsername={setUsername}
                    />
                </div>    
            </div>: null}
        </div>
    )
}