import React from "react";

import { Link } from "react-router-dom";

import checkSvg from "../assets/check-square.svg";
import crossSvg from "../assets/close-square.svg";

const Card = () => {
  const data = [
    {
      id: 1,
      name: "Rahul",
      photo: "https://randomuser.me/api/portraits/men/75.jpg",
      status: 0,
    },
    {
      id: 2,
      name: "Nikhil",
      photo: "https://randomuser.me/api/portraits/men/84.jpg",
      status: 1,
    },
    {
      id: 3,
      name: "Dikshant",
      photo: "https://randomuser.me/api/portraits/men/45.jpg",
      status: 0,
    },
  ];

  const cardList = data.map((item, index) => {
    return (
      <div
        key={index}
        className="p-4 border shadow-md my-3 rounded-lg w-2/4 flex items-center justify-center relative hover:border-orange-500 transition-all ease-in-out duration-500"
      >
        <img
          src={item.status ? checkSvg : crossSvg}
          className="w-20 rounded-lg absolute top-2/4 left-0 transform -translate-x-2/4 -translate-y-2/4"
        />
        {/* content */}
        <div className="flex items-center justify-center flex-col md:flex-row">
          <img src={item.photo} alt={item.name} className="w-28 rounded-lg" />
          <h1 className="font-semibold text-3xl mx-5">{item.name}</h1>
        </div>

        {item.status ? (
          ""
        ) : (
          <Link to={"/mark/" + item.id}>
            <button className="text-white bg-orange-400 rounded px-2 py-1 absolute top-2/4 -right-0 transform translate-x-2/4 -translate-y-2/4">
              {" "}
              Mark{" "}
            </button>
          </Link>
        )}
      </div>
    );
  });

  return (
    <div className="flex justify-center flex-col items-center">{cardList}</div>
  );
};

export default Card;
