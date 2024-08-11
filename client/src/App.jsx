import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css"
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Room from "./components/rooms/Rooms";

const App = () => {
  return <div>
    <Navbar />
    <Home />
    {/* <Room /> */}
    <Footer />
  </div>;
};

export default App;
