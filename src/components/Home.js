import { useState } from 'react';
import Linkbar from './Linkbar';
import Main from './Main';
import Compose from './Compose';
import { CgClose } from 'react-icons/cg';

export default function Home({ tweets, setTweets, top, setTop, icon, setIcon, name, setName, username, setUsername, isModal, handleModal }) {
    const [loading, setLoading] = useState(false);

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
                setTop={setTop}
                top={top}
            />

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
                            isModal={isModal}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div> : null}
        </div>
    )
}