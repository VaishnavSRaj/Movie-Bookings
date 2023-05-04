import { Link, useParams } from "react-router-dom";
import useMovie from "../utils/useMovie";

const InfoPage = () => {
  const params = useParams();
  const { id } = params;

  const info = useMovie(id);

  return (
    <div className="  flex flex-col justify-between lg:flex-row gap-16 lg:items-center p-4 ">
      <div className="flex flex-col gap-6 lg:w-2/4">
        <img
          className=" w-full h-ful aspect-square object-cover"
          src={info?.image?.original}
          alt="image"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <span className="text-black font-semibold">{info?.premiered}</span>

          <h1 className="text-3xl font-bold">{info?.name}</h1>
        </div>
        <span className="text-gray-500 font-bold text-xl">Summary</span>
        <p className="text-gray-700">{info?.summary}</p>
        <div className="text-lg font-semibold">
          <h1>{info?.language}</h1>
        </div>
        <div className="text-lg font-semibold">
          <h1>{info?.rating?.average}</h1>
        </div>
        <div>
          <Link to={"/bookings/" + id}>
            <button className="bg-red-500 text-white font-semibold py-3 px-16 rounded-xl h-full hover:bg-red-700">
              BOOK NOW
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
