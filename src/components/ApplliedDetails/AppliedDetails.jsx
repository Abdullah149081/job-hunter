import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const AppliedDetails = ({ applied }) => {
  const { id, company_logo, job_title, company_name, remote_or_onsite, fulltime_or_parttime, salary, location } = applied;
  const navigate = useNavigate();
  const handlerJobDetails = () => {
    navigate(`/jobDetails/${id}`);
  };

  console.log(applied);
  return (
    <div className="border rounded-sm py-10 px-6 mt-7">
      <div className="flex justify-between items-center flex-col lg:flex-row">
        <div className="flex flex-col lg:flex-row gap-6">
          <img className="lg:w-64  h-64   rounded shadow-lg bg-slate-100 border" src={company_logo} alt="" />
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
          </div>
        </div>
        <div>
          <button onClick={handlerJobDetails} className="btn font-bold mt-8">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppliedDetails;
