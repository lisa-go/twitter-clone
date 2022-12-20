import { Link } from 'react-router-dom';
import Tweets from './Tweets';
import Discover from './Discover';
import Compose from './Compose';
import { HiOutlineSparkles } from 'react-icons/hi'

export default function Main ({ loading, setLoading, tweets, setTweets, icon, setIcon }) {

    

    return (
        <main>
            <div id="main">
                <div className="pageHead">
                    <span>Home</span>
                    <Link to="/discover">
                        <HiOutlineSparkles size={20} />
                    </Link>
                </div>

                <Compose tweets={tweets}
                    setTweets={setTweets}
                    icon={icon}
                    setIcon={setIcon}
                    />

                <Tweets loading={loading}
                    setLoading={setLoading}
                    tweets={tweets}
                    setTweets={setTweets} 
                    />
            </div>

        <Discover />
    </main>
    )
}