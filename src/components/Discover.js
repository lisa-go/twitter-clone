import { FiSearch } from 'react-icons/fi';
import cat0 from "../images/cat(0).png";
import cat1 from "../images/cat(1).png";
import cat2 from "../images/cat(2).png";
import cat3 from "../images/cat(3).png";
import cat4 from "../images/cat(4).png";
import cat5 from "../images/cat(5).png";
import cat6 from "../images/cat(6).png";
import cat7 from "../images/cat(7).png";
import cat8 from "../images/cat(8).png";
import cat9 from "../images/cat(9).png";

var moment = require('moment');

export default function Discover({ top }) {

    const defaultImages = [cat0, cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9]

    const defaultIcon = (e) => {
        let pic = Math.floor(Math.random() * 10);
        e.target.src = defaultImages[pic];
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
                            <div className="tweet" key={tw.pusername + tw._id}>
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