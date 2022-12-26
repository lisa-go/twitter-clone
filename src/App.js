import { Routes, Route, Navigate } from "react-router-dom";
import DiscoverPage from "./components/DiscoverPage";
import Home from "./components/Home";
import Profile from "./components/Profile";
import { useState } from "react";

export default function App() {

  const [tweets, setTweets] = useState([{}]);

  const [top, setTop] = useState([{}]);

  const [icon, setIcon] = useState('https://i.imgur.com/b8fNcS2.png');

  const [name, setName] = useState('Name');

  const [username, setUsername] = useState('@Username');

  const [isModal, setIsModal] = useState(false);

  const handleModal = () => {
      setIsModal(!isModal);
  }

  return (
    <Routes>
      <Route path="/"
        element={<Navigate to="/home" />} />

      <Route path="/home"
        element={<Home 
          tweets={tweets}
          setTweets={setTweets}
          top={top}
          setTop={setTop}
          icon={icon} 
          setIcon={setIcon}
          name={name}
          setName={setName}
          username={username}
          setUsername={setUsername}
          isModal={isModal}
          handleModal={handleModal}
          />} />

      <Route path="/discover"
        element={<DiscoverPage 
          setTweets={setTweets}
          top={top}
          icon={icon} 
          setIcon={setIcon}
          name={name}
          setName={setName}
          username={username}
          setUsername={setUsername}
          isModal={isModal}
          handleModal={handleModal}
          />} />
          
    </Routes>
  );
}