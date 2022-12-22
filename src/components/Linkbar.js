import { Link } from "react-router-dom";
import { RiTwitterFill, RiHome7Fill, RiHashtag, RiNotification2Line, RiQuillPenLine } from 'react-icons/ri';
import { HiOutlineMail, HiOutlineBookmark } from 'react-icons/hi';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { CiCircleMore } from 'react-icons/ci';
import { GrFormAdd } from 'react-icons/gr';
import { MdOutlineMoreHoriz } from 'react-icons/md';

export default function Linkbar ({ icon, name, username, isModal, setIsModal }) {

    const handleModal = () => {
        setIsModal(!isModal)

        console.log('yes');
        console.log(isModal);
    }

    return (
        <header>
            <div id="linkcont">
        <div id="linkbar">
            <div className="links">
                <Link to="/home" className="icon mobHide" >
                    <RiTwitterFill size={40} color="rgb(29, 155, 240)" />
                </Link>

                <Link to="/home">
                    <RiHome7Fill  size={26.25} />
                    <span>Home</span>
                </Link>

                <Link to="/discover">
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

                <button className="twtBtn" onClick={handleModal} >
                    <span>Tweet</span>
                    <div className="composeIcon">
                        <GrFormAdd className="filter-bw add"/>
                        <RiQuillPenLine size={22} className="feather" />
                    </div>
                </button>
            </div>

            <div className="account mobHide">
                <img src={icon} alt="icon" />
                <div className="names">
                    <span className="name">{name}</span>
                    <span>{username}</span>
                </div>
                <span className="more">
                    <MdOutlineMoreHoriz size={18.75} />
                </span>
            </div>
        </div>
        </div>
        </header>
    )
}