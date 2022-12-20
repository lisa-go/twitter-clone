import { useState } from "react";
import { FiImage } from "react-icons/fi";
import { RiFileGifFill } from "react-icons/ri";
import { FaPollH } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineFaceSmile } from "react-icons/hi2";
import { TbCalendarTime } from "react-icons/tb";

export default function Compose ({ tweets, setTweets }) {

    const [icon, setIcon] = useState('https://i.imgur.com/b8fNcS2.png');
    const handleIcon = (e) => {
      console.log(e.target.files);
      setIcon(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <form id="compose">
            <label className="image">
                <img src={icon} alt="icon" />
                <input type="file" id="picon" 
                accept="image/png, image/jpeg, image/jpg" onChange={handleIcon}/>
                <span>Click on image to change</span>
            </label>

            <div className="right">
                <textarea name="twtcontent" id="twtcontent" placeholder="What's happening?" />

                <div className="names">
                    <input type="text" name="pname" id="pname" placeholder="Name" />
                    <input type="text" name="pusername" id="pusername" placeholder="@Username" pattern="^@?(\w){1,15}$"/>
                </div>

                <div className="bottom">
                    <div className="badges">
                        <FiImage size={20} />
                        <RiFileGifFill size={20} />
                        <FaPollH size={20} />
                        <HiOutlineFaceSmile size={20} />
                        <TbCalendarTime size={20} />
                        <HiOutlineLocationMarker size={20} />
                    </div>
                    <button type="submit">Tweet</button>
                </div>
            </div>
        </form>
    )
}