import React, { useState } from "react";
import { FiCommand } from "react-icons/fi";
import { TiTimesOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="md:sticky top-0 z-10 lg:mt-5">
        <nav className="lg:px-32 h-20 flex justify-between items-center pl-4 bg-white ">
          <div>
            <Link to="/">
              <h2 className="text-4xl font-bold">
                Job <span className="font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-lime-600 to-slate-700">H</span>u
                <span className="font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-lime-600 to-slate-700">n</span>ter
              </h2>
            </Link>
          </div>

          <div>
            <div
              onClick={() => {
                setOpen(!open);
              }}
            >
              <span className="pr-12 md:pr-0 ">
                {open ? <TiTimesOutline className="h-6 w-7 mt-7 md:hidden text-gray-900 cursor-pointer" /> : <FiCommand className="h-7 w-7 mt-7 md:hidden text-gray-900  cursor-pointer" />}
              </span>
            </div>

            <div
              className={`flex  flex-col md:py-0 md:space-x-10  font-bold  md:shadow-none   md:static md:flex-row  md:block ${
                open ? "top-22 left-0 h-1/2 w-full text-center py-12   shadow-lg pl-12 pr-6 space-y-6   absolute  bg-white" : "hidden"
              }`}
            >
              <ActiveLink to="/">Home</ActiveLink>
              <ActiveLink to="/statistics">Statistics</ActiveLink>
              <ActiveLink to="/applied-jobs">Applied Jobs</ActiveLink>
              <ActiveLink  to="/blog">
                Blog
              </ActiveLink>
              <button className="btn">Star Applying</button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
