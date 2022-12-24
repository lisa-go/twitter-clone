import { useEffect, useState } from 'react';
import Linkbar from './Linkbar';
import Main from './Main';
import Compose from './Compose';
import { CgClose } from 'react-icons/cg';


export default function Home() {
    const [loading, setLoading] = useState(false);

    const [tweets, setTweets] = useState([{}]);

    const [top, setTop] = useState([{}]);

    const [icon, setIcon] = useState('https://i.imgur.com/b8fNcS2.png');

    const [name, setName] = useState('Name');

    const [username, setUsername] = useState('@Username');

    const [isModal, setIsModal] = useState(false);

    const handleModal = () => {
        setIsModal(!isModal);
    }



    return (
        <div id="content">
            <Linkbar icon={icon}
                name={name}
                username={username}
                handleModal={handleModal}
                 />

            <Main loading={loading}
                setLoading={setLoading}
                tweets={tweets}
                setTweets={setTweets} 
                icon={icon}
                setIcon={setIcon} 
                setName={setName}
                setUsername={setUsername}
                isModal={isModal} 
                setTop={setTop} 
                top={top} />

            {isModal ? 
            <div id="modal" onClick={handleModal}> 
                <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
                    <CgClose size={20} onClick={handleModal} />
                    <Compose
                    setTweets={setTweets}
                    icon={icon}
                    setIcon={setIcon}
                    setName={setName}
                    setUsername={setUsername}
                    onClick={(e) => e.stopPropagation()}
                    />
                </div>    
            </div>: null}
        </div>
    )
}