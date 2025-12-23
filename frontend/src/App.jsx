import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<div>Courses Page</div>} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/faculty" element={<div>Faculty Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
      </Routes>
    </>
  );
};

export default App;
