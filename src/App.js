import { Routes, Route, Navigate } from "react-router-dom";
import Discover from "./components/Discover";
import Home from "./components/Home";
import Profile from "./components/Profile";

export default function App() {
  return (
    <Routes>
      <Route path="/"
        element={<Navigate to="/home" />} />

      <Route path="/home"
        element={<Home />} />

      <Route path="/discover"
        element={<Discover />} />

      <Route path="/profile"
        element={<Profile />} />
    </Routes>
  );
}