import { FiSearch } from 'react-icons/fi';
var moment = require('moment');

export default function Discover({ top }) {

    const defaultIcon = (e) => {
        e.target.src = 'https://i.imgur.com/b8fNcS2.png';
    }

    return (
        <div id="discover">

            <div className="searchbar">
                <FiSearch />
                <input type="text" placeholder="Search Twitter" />
            </div>

            <div className="topTweets">
                <div className="title">What's Happening</div>
                {
                    top.map((tw) => {
                        return (
                            <div className="tweet" key={tw._id}>
                            <div className="picture">
                                <img src={tw.picon} alt={tw.pname} onError={defaultIcon} />
                            </div>
    
                            <div className="text">
                                <div className="twtHead">
                                    <div>{tw.pusername}</div>
                                    <div>• {moment(tw.date).fromNow()}</div>
                                </div>
    
                                <div className="twtContent">{tw.twtcontent}</div>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}