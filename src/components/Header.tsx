"use client";
import { ChevronDown, Search, UserRound, Settings } from "lucide-react";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  const navbarOptions = [
    "Home",
    "Orders",
    "Integrations",
    "Tracking Page",
    "Partner with Us",
  ];
  return (
    <div className=" bg-white flex px-16 pt-5 pb-4 items-center justify-between border-b border-black">
      <div className="flex gap-8">
        {navbarOptions.map((option) => {
          return (
            <a
              key={option}
              className="flex gap-1 font-semibold hover:border-b-2 pb-1 border-purple-700"
              href="#"
            >
              {option}{" "}
              {option === "Tracking Page" && (
                <ChevronDown size={20} color="#4A4A4A" />
              )}
            </a>
          );
        })}
      </div>

      <div className="flex justify-between items-center gap-10">
        <div className="flex border-b-2 border-black gap-2 px-1 py-2">
          <Search className="w-4 h-4" />
          <input
            style={{ background: "none" }}
            type="text"
            className="font-inter w-30 font-normal focus:outline-none bg-none flex-1 text-sm navbar-input"
            placeholder="Search"
          />
        </div>

        <div className="flex items-center gap-1 justify-center cursor-pointer">
          <UserRound size={18} />
          <h1 className="text-md font-inter font-semibold">Account</h1>
        </div>

        <div className="flex items-center gap-1 justify-center cursor-pointer">
          <Settings size={18} />
          <h1 className="text-md font-inter font-semibold">Settings</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
