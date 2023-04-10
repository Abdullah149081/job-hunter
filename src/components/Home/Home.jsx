import React, { useEffect, useState } from "react";

import Lottie from "lottie-react";
import { useLoaderData } from "react-router-dom";
import reader from "../../assets/129467-job-hunting.json";
import Category from "../Category/Category";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
  const category = useLoaderData();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="px-4 py-16  md:px-24 lg:px-28 lg:py-20">
      {/* banner  */}
      <div className="flex flex-col md:flex-row items-center justify-between ">
        <div className="lg:w-1/2 space-y-8 ">
          <h1 className="text-4xl md:text-7xl font-bold lg:leading-tight ">
            One Step Closer To Your <span className="text-g ">Dream Job</span>
          </h1>
          <p className="text-stone-500 lg:text-2xl">
            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
          </p>
          <button className="btn font-bold">Get Started</button>
        </div>
        <div className="lg:w-1/2 ">
          <div className="w-full lg:w-4/5 lg:ml-auto ">
            <Lottie animationData={reader} loop={true} />
          </div>
        </div>
      </div>
      {/* job category  */}
      <div className="mt-32">
        <h2 className="text-center text-5xl font-bold mb-5">Job Category List</h2>
        <p className="text-center text-stone-500">Explore thousands of job opportunities with all the information you need. Its your future</p>
        <div className="grid lg:grid-cols-4 mt-32 gap-6">
          {category.map((list, index) => (
            <Category key={index} list={list}></Category>
          ))}
        </div>
      </div>
      {/* Featured Jobs */}
      <div className="mt-32">
        <h2 className="text-center text-5xl font-bold mb-5">Featured Jobs</h2>
        <p className="text-center text-stone-500">Explore thousands of job opportunities with all the information you need. Its your future</p>
        <div className="grid lg:grid-cols-2 mt-32 gap-6">
          {jobs.map((job) => (
            <FeaturedJobs key={job.id} job={job}></FeaturedJobs>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
