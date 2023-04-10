import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

const FeaturedJobs = ({ job }) => {
  const { id, company_logo, job_title, company_name, remote_or_onsite, fulltime_or_parttime, salary, location } = job;
  const navigate = useNavigate();
  const handlerJobDetails = () => {
    navigate(`/jobDetails/${id}`);
  };

  return (
    <div className="border rounded-sm py-10 pl-10">
      <img className="w-64  h-20 object-cover" src={company_logo} alt="" />
      <div className="space-y-5 mt-8">
        <h2 className="text-2xl font-bold text-neutral-700">{job_title}</h2>
        <p className="text-lg font-bold text-slate-500">{company_name}</p>
        <p className="font-semibold">
          <span className="remote_or_fulltime text-g ">{remote_or_onsite}</span> <span className=" remote_or_fulltime text-g">{fulltime_or_parttime}</span>
        </p>
        <p className="text-lg font-bold text-stone-600 flex  gap-8 items-center">
          <span className="location_salary">
            <HiOutlineLocationMarker />
            {location}
          </span>
          <span className="location_salary">Salary : {salary}</span>
        </p>

        <button onClick={handlerJobDetails} className="btn font-bold">
          View Details
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
