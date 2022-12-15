import { Routes, Route, Navigate } from "react-router-dom";
import Compose from "./components/Compose";
import Home from "./components/Home";
import Profile from "./components/Profile";

export default function App() {
  return (
    <Routes>
      <Route path="/"
        element={<Navigate to="/home" />} />

      <Route path="/home"
        element={<Home />} />

      <Route path="/profile"
        element={<Profile />} />

      <Route path="/compose/tweet"
        element={<Compose />} />
    </Routes>
  );
}