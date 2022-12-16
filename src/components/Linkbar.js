import { Link } from "react-router-dom";
import { RiTwitterFill, RiHome7Fill, RiHashtag, RiNotification2Line } from 'react-icons/ri';
import { HiOutlineMail, HiOutlineBookmark } from 'react-icons/hi';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { CiCircleMore } from 'react-icons/ci';

export default function Linkbar () {

    return (
        <header>
            <div id="linkcont">
        <div id="linkbar">
            <Link to="/home" className="icon mobHide" >
                <RiTwitterFill size={40} color="rgb(29, 155, 240)" />
            </Link>

            <Link to="/home">
                <RiHome7Fill  size={26.25} />
                <span>Home</span>
            </Link>

            <Link to="/">
                <RiHashtag size={26.25} />
                <span>Explore</span>
            </Link>

            <Link to="/">
                <RiNotification2Line size={26.25} />
                <span>Notifications</span>
            </Link>

            <Link to="/" className="mobHide">
                <HiOutlineMail size={26.25} />
                <span>Messages</span>
            </Link>

            <Link to="/" className="mobHide">
                <HiOutlineBookmark size={26.25} />
                <span>Bookmarks</span>
            </Link>

            <Link to="/" className="mobHide">
                <AiFillTwitterSquare size={26.25} />
                <span>Twitter Blue</span>
            </Link>

            <Link to="/profile">
                <BsPerson size={26.25} />
                <span>Profile</span>
            </Link>

            <Link to="/" className="mobHide">
                <CiCircleMore size={26.25} />
                <span>More</span>
            </Link>

            <Link to="/compose/tweet" className="twtBtn mobHide">
                <span>Tweet</span>
            </Link>

            <div className="mobHide">Account</div>
        </div>
        </div>
        </header>
    )
}