import React from "react";

import Lottie from "lottie-react";
import reader from "../../assets/129467-job-hunting.json";

const Home = () => {
  return (
   
    <div className="px-4 py-16  md:px-24 lg:px-28 lg:py-20">
      {/* flex  */}
      <div className="flex flex-col md:flex-row items-center justify-between ">
        {/* text  */}
        <div className="lg:w-1/2 space-y-8 ">
          <h1 className="text-4xl md:text-7xl font-bold leading-tight ">
            One Step Closer To Your <span className="bg-gradient-to-r from-indigo-500 to-violet-500 text-transparent  bg-clip-text">Dream Job</span>
          </h1>
          <p className="text-stone-500 lg:text-2xl">
            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
          </p>
          <button className="btn font-bold">Get Started</button>
        </div>
        {/* animaiton */}

        <div className="lg:w-1/2 ">
          <div className="w-full lg:w-4/5 lg:ml-auto ">
            <Lottie animationData={reader} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
