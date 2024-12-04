// import React from "react";
import ProfileImage from "../assets/profile_img.png";

const Header = () => {
  return (
    <div className="bg-[#3556AB] p-5 flex gap-4 items-start">
      <img src={ProfileImage} alt="Profile Image" />
      <div className="text-white">
        <p className="font-normal custom-shadow">Hello, John</p>
        <p className="italic font-thin text-[25px] custom-shadow">
          What are your plans for today?
        </p>
      </div>
    </div>
  );
};

export default Header;
