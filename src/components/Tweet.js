import { FiMessageCircle } from 'react-icons/fi';
import { FiRepeat } from 'react-icons/fi';
import { HiOutlineHeart, HiOutlineUpload } from 'react-icons/hi';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Tweet({ tw, updateRT, setUpdateRT }) {

    const [retweet, setRetweet] = useState(false);



    const defaultIcon = (e) => {
        e.target.src = 'https://i.imgur.com/b8fNcS2.png';
    }



    const retweetStatus = (tw) => {
        setRetweet(!retweet);
        updateRetweet(tw)
        setUpdateRT(!updateRT)
    }

    function updateRetweet(tw) {
        if (retweet === false) {
            axios.patch('http://localhost:8080/home/' + tw._id, {
                _id: tw._id,
                likes: tw.likes,
                retweets: tw.retweets + 1
            })
        }
        if (retweet === true) {
            axios.patch('http://localhost:8080/home/' + tw._id, {
                _id: tw._id,
                likes: tw.likes,
                retweets: tw.retweets - 1
            })
        }
    }

    return (
        <div className="tweet">
            <div className="picture">
                <img src={tw.picon} alt={tw.pname} onError={defaultIcon} />
            </div>

            <div className="text">
                <div className="twtHead">
                    <div className="twtName">{tw.pname}</div>
                    <div>{tw.pusername}</div>
                    <div>• {tw.date}</div>
                </div>

                <div className="twtContent">{tw.twtcontent}</div>

                <div className="twtBadges">
                    <div className="blue">
                        <FiMessageCircle size={18.75} />
                        <span>{tw.replies}</span>
                    </div>

                    <div className="green" onClick={() => retweetStatus(tw)}
                        style={retweet ? { color: '#36b87b' } : {}}>
                        <FiRepeat size={18.75} />
                        <span>{tw.retweets}</span>
                    </div>

                    <div className="pink">
                        <HiOutlineHeart size={18.75} />
                        <span>{tw.likes}</span>
                    </div>

                    <div className="blue">
                        <HiOutlineUpload size={18.75} />
                    </div>

                </div>
            </div>
        </div>
    )
}