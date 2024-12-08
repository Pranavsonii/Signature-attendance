import React from "react";

const Header = () => {
  let date = new Date();
  let dateStr = date.toDateString();
  return (
    <>
      <div className="w-full py-10  bg-orange-600 flex justify-center items-center ">
        <h1 className="text-white text-center text-5xl font-bold">
          प्रदेश कार्यकारिणी, दिल्ली
        </h1>
      </div>
      <div className="w-full py-2 bg-amber-900 flex justify-center items-center ">
        <h1 className="text-white text-center text-xl ">{dateStr}</h1>
      </div>
    </>
  );
};

export default Header;
