import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Chat from "../pages/chat/Chat";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="chat" element={<Chat/>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;