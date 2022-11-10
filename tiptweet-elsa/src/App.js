import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import {
  Home,
  MyTweets,
  HomeMyTweets,
  InputMyTweets,
  EditMyTweets,
  About,
} from "./Pages";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container-fluid">
        <div>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="mytweets" element={<MyTweets></MyTweets>}>
              <Route path="" element={<HomeMyTweets />}></Route>
              <Route path="inputtweets" element={<InputMyTweets />}></Route>
              <Route path="edittweets/:id" element={<EditMyTweets />}></Route>
            </Route>
            <Route path="/about" element={<About></About>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
