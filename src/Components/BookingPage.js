import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useMovie from "../utils/useMovie";

const BookingPage = () => {
  const params = useParams();
  const { id } = params;

  const info = useMovie(id);

  const [Username, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const [bookingData, setBookingData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const bookings = {
      Username,
      email,
      movieName: info?.name,
      movieSummary: info?.summary,
    };
    setBookingData([...bookingData, bookings]);
    setUserName("");
    setEmail("");
  };

  useEffect(() => {
    localStorage.setItem("Booking-Details", JSON.stringify(bookingData));
  }, [bookingData]);

  return (
    <div className="max-w-lg mx-auto mt-5">
      <h2 className="text-xl font-medium mb-4">Booking Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={Username}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter Your Name"
            className="border-gray-400 border-2 p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
            className="border-gray-400 border-2 p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Movie Name
          </label>
          <input
            type="text"
            id="name"
            value={info?.name}
            disabled
            className="border-gray-400 border-2 p-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-700 font-medium mb-2"
          >
            Summary
          </label>
          <textarea
            id="message"
            value={info?.summary}
            disabled
            className="border-gray-400 border-2 p-2 w-full"
            required
          />
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="bg-green-500 text-white font-medium py-2 px-4 rounded hover:bg-green-700"
          >
            Confirm Booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingPage;
