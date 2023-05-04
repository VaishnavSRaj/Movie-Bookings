import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const CardContainer = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    getMovie();
  }, []);

  const getMovie = async () => {
    const data = await fetch("https://api.tvmaze.com/search/shows?q=all");
    const json = await data.json();
    setMovie(json);

    console.log(json);
  };
  return (
    <div className="m-4 p-4 flex flex-wrap items-center">
      {movie.map((data) => (
        <Link to={"/info/" + data.show.id} key={data.score}>
          <Card info={data} />
        </Link>
      ))}
    </div>
  );
};

export default CardContainer;
