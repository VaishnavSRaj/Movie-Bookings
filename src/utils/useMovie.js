import { useState, useEffect } from "react";
import { URL } from "../Constants";

const useMovie = (id) => {
  const [info, setInfo] = useState();
  useEffect(() => {
    getMovieInfo();
  }, []);

  const getMovieInfo = async () => {
    try {
      const data = await fetch(URL + id);
      const json = await data.json();

      setInfo(json);
    } catch (error) {
      console.log(error);
    }
  };

  return info;
};

export default useMovie;
