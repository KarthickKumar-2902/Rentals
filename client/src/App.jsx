import "./App.css"
import Home from "./components/home/Home";
import Room from "./components/rooms/Rooms";
import {Route, Routes} from "react-router-dom"
import Body from "./routes/Body";
import Signin from "./components/forms/Signin";
import Register from "./components/forms/Register";
import Customer from "./components/Customer";
import UploadRoom from "./components/uploadRoom/UploadRoom";
import RoomDetails from "./components/roomDetails/RoomDetails";


const App = () => {
  return <div>
    <Routes>
      <Route element={<Body/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/rooms" element={<Room/>}/>
        <Route path="/roomdetails/:id" element={<RoomDetails/>}/>
        <Route  path="/customerservice" element={<Customer/>}/>
        <Route path="/signIn" element={<Signin/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/uploadroom" element={<UploadRoom/>}/>
      </Route>
      <Route path="*" element={<h1 className="flex justify-center text-xl items-center">404,Page Not Found</h1>}/>
    </Routes>
  </div>;
};

export default App;
