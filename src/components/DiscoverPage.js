import Linkbar from "./Linkbar";
import Discover from "./Discover";
import Compose from "./Compose";
import Footer from "./Footer";
import { CgClose } from 'react-icons/cg';

export default function DiscoverPage({ setTweets, top, icon, setIcon, name, setName, username, setUsername, isModal, handleModal }) {

    return (
        <div id="content">
            <Linkbar icon={icon}
                name={name}
                username={username}
                handleModal={handleModal}
            />

            <main>
                <div id="main">
                    <Discover
                        top={top.slice(0, 10)} />
                </div>
                <div className="rightPanel">
                    <div className="rightContainer">
                        <Footer />
                    </div>
                </div>
            </main>

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