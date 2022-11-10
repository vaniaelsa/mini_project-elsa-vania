import React from "react";
import { Outlet } from "react-router-dom";

const MyTweets = () => {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
};

export default MyTweets;
