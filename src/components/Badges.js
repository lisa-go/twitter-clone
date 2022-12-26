import { FiMessageCircle } from 'react-icons/fi';
import { FiRepeat } from 'react-icons/fi';
import { HiOutlineHeart, HiOutlineUpload } from 'react-icons/hi';
import { useState } from 'react';
import axios from 'axios';

export default function Badges({ tw, updateRT, setUpdateRT, updateL, setUpdateL }) {

    const [retweet, setRetweet] = useState(false);

    const [like, setLike] = useState(false);

    const retweetStatus = (tw) => {
        setRetweet(!retweet);
        updateRetweet(tw);
        setUpdateRT(!updateRT);
    }

    function updateRetweet(tw) {
        if (retweet === false) {
            axios.patch('https://wild-lime-magpie-yoke.cyclic.app/home/' + tw._id, {
                _id: tw._id,
                likes: tw.likes,
                retweets: tw.retweets + 1
            })
        }
        if (retweet === true) {
            axios.patch('https://wild-lime-magpie-yoke.cyclic.app/home/' + tw._id, {
                _id: tw._id,
                likes: tw.likes,
                retweets: tw.retweets - 1
            })
        }
    }

    const likeStatus = (tw) => {
        setLike(!like);
        updateLike(tw);
        setUpdateL(!updateL);
    }

    function updateLike(tw) {
        if (like === false) {
            axios.patch('https://wild-lime-magpie-yoke.cyclic.app/home/' + tw._id, {
                _id: tw._id,
                likes: tw.likes + 1,
                retweets: tw.retweets
            })
        }
        if (like === true) {
            axios.patch('https://wild-lime-magpie-yoke.cyclic.app/home/' + tw._id, {
                _id: tw._id,
                likes: tw.likes - 1,
                retweets: tw.retweets
            })
        }
    }

    return (
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

            <div className="pink" onClick={() => likeStatus(tw)}
                style={like ? { color: '#ee7387' } : {}}>
                <HiOutlineHeart size={18.75}
                    style={like ? { fill: '#ee7387' } : {}} />
                <span>{tw.likes}</span>
            </div>

            <div className="blue">
                <HiOutlineUpload size={18.75} />
            </div>
        </div>
    )
}