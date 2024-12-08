import React from "react";

import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import SignaturePad from "../components/SignaturePad";

const Mark = () => {
  const { id } = useParams();
  // console.log(id);

  return (
    <>
      <Header />
      <div className="flex items-center justify-center">
        <div className="w-2/3 border rounded-md my-3 p-4 flex items-center flex-col ">
          {/* <h1>ID:{id}</h1> */}
          <h1 className="text-4xl text-center font-bold mt-1 mb-8">
            Rahul Chaudhary
          </h1>
          <img
            src="https://randomuser.me/api/portraits/men/84.jpg"
            alt=""
            className="w-36 rounded-lg"
          />
          <SignaturePad />
        </div>
      </div>
    </>
  );
};

export default Mark;
