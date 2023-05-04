import React from "react";

const Card = ({ info }) => {
  return (
    <div className=" relative max-w-xs overflow-hidden rounded-2xl shadow-lg group m-7 shadow-lg">
      <img
        className="transition-transform group-hover:scale-110 duration-200"
        src={info?.show?.image?.medium}
        alt="image"
      />
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
        <ul className="m-2">
          <li>
            <h1 className="font-serif font-bold text-lg text-white">
              {" "}
              {info?.show?.name}
            </h1>
          </li>
          <li>
            <h2 className="text-slate-600 font-serif text-white">
              {" "}
              {info.show?.language}
            </h2>
          </li>
          <li>
            <h2 className="text-slate-600 font-serif text-white">
              {" "}
              {info.show?.rating?.average}
            </h2>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
