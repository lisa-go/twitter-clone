import { useForm } from "react-hook-form";
import { FiImage } from "react-icons/fi";
import { RiFileGifFill } from "react-icons/ri";
import { FaPollH } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineFaceSmile } from "react-icons/hi2";
import { TbCalendarTime } from "react-icons/tb";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Compose({ setTweets, icon, setIcon, setName, setUsername }) {

    const handleIcon = (e) => {
        setIcon(URL.createObjectURL(e.target.files[0]));
    }

    const { register, handleSubmit } = useForm();

    const [update, setUpdate] = useState(true);

    const onSubmit = (form) => {
        axios.post('http://localhost:8080/home', {
            picon: icon,
            pname: form.pname,
            pusername: form.pusername,
            twtcontent: form.twtcontent
        })
        setUpdate(!update);
    }

    useEffect(() => {
        axios.get('http://localhost:8080/home')
        .then(Response => {
            setTweets(Response.data);
            console.log(Response.data);
        })
        .catch(Error => { console.log(Error) });
    }, [update]);

    const handleChange = (e) => {
        if (e.target.id === 'pname') {
         setName(e.target.value);   
        };
        if (e.target.id === 'pusername') {
            setUsername(e.target.value);   
        };
      }

    return (
        <form id="compose" onSubmit={handleSubmit(onSubmit)}>
            <label className="image">
                <img src={icon} alt="icon" />
                <input type="file"
                    accept="image/png, image/jpeg, image/jpg" onChange={handleIcon}
                />
                <span>Click on image to change</span>
            </label>

            <div className="right">
                <textarea placeholder="What's happening?"
                    name="twtcontent" id="twtcontent" maxLength="300" required
                    {...register('twtcontent')} />

                <div className="names">
                    <input type="text" placeholder="Name"
                        name="pname" id="pname" minLength="3"
                        {...register('pname')} onChange={handleChange} />
                    <input type="text" placeholder="@Username"
                        name="pusername" id="pusername" minLength="3"
                        pattern="(?<=^|(?<=[^a-zA-Z0-9-_\.]))@([A-Za-z]+[A-Za-z0-9-_]+)"
                        {...register('pusername')} onChange={handleChange} />
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