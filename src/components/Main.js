import { Link } from 'react-router-dom';
import Tweets from './Tweets';
import Discover from './Discover';
import Compose from './Compose';
import { HiOutlineSparkles } from 'react-icons/hi';
import { useState } from 'react';
import Footer from './Footer';

export default function Main({ loading, setLoading, tweets, setTweets, icon, setIcon, setName, setUsername, top, setTop }) {

    const [update, setUpdate] = useState(false);

    return (
        <main>
            <div id="main">
                <div className="pageHead">
                    <img src={icon} alt="icon" />
                    <div className="header">
                        <span>Home</span>
                        <Link to="/discover">
                            <HiOutlineSparkles size={20} />
                        </Link>
                    </div>
                </div>

                <Compose
                    setTweets={setTweets}
                    icon={icon}
                    setIcon={setIcon}
                    setName={setName}
                    setUsername={setUsername}
                    setLoading={setLoading}
                    update={update}
                    setUpdate={setUpdate}
                />

                <Tweets loading={loading}
                    setLoading={setLoading}
                    tweets={tweets}
                    setTweets={setTweets}
                    update={update}
                    setTop={setTop}
                />
            </div>

            <div className="right">
                <div className="rightContainer">
                    <Discover
                    top={top.slice(0, 6)} />
                    <Footer />
                </div>
            </div>

        </main>
    )
}