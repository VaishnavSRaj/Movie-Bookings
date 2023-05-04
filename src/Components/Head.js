import React from "react";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <div className="bg-white shadow-xl p-6">
      <div>
        <Link to={"/"}>
          <img
            className="w-20 h-16 ml-6"
            src="https://www.pngkit.com/png/full/81-813515_movie-ticket-booking-site-logo-cinema-club.png"
            alt="logo"
          ></img>
        </Link>
      </div>
    </div>
  );
};

export default Head;
