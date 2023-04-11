import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { HiCurrencyDollar, HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { HiCalendarDays, HiOutlinePhone } from "react-icons/hi2";
import { useLoaderData, useParams } from "react-router-dom";
import { addToDb } from "../../utilities/fakedb";

const JobDetails = () => {
  const [details, setDetails] = useState({});
  const detail = useParams();
  const jobs = useLoaderData();
  const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, phone, email, location, id } = details;

  const setLocalStorage = (id) => {
    toast.success("congratulation  You're successfully applied job");
    addToDb(id);
  };

  useEffect(() => {
    if (jobs) {
      const findJob = jobs.find((job) => job.id === detail.Id);
      setDetails(findJob);
    }
  }, []);

  return (
    <div className="px-4 py-16  md:px-24 lg:px-28 lg:py-20">
      <h2 className="text-center text-4xl font-bold text-gray-900">Job Details</h2>
      {/* flex  */}
      <div className="lg:mt-36 mt-12 flex flex-col md:flex-row gap-12 lg:px-40">
        {/* job  */}
        <div className="space-y-7 text-lg lg:w-2/3 ">
          <p>
            <span className="font-bold text-">Job Description:</span> <span className="text-zinc-500 font-semibold">{job_description}</span>
          </p>
          <p>
            <span className="font-bold">Job Responsibility:</span> <span className="text-zinc-500 font-semibold">{job_responsibility}</span>
          </p>
          <p>
            <span className="font-bold">Educational Requirements:</span> <br /> <br />
            <span className="text-zinc-500 font-semibold"> {educational_requirements}</span>
          </p>
          <p>
            <span className="font-bold">Experiences:</span> <span className="text-zinc-500 font-semibold">{experiences}</span>
          </p>
        </div>
        {/* app  */}
        <div className="border-2 p-8 rounded-lg font-bold bg-indigo-200 bg-opacity-25">
          <h2 className="text-lg text-gray-800 mb-8">Job Details</h2>
          <div className="space-y-4 mb-6">
            <p className="flex item-center  gap-4">
              <HiCurrencyDollar className="w-6 h-6 text-indigo-400" /> <span className="text-zinc-700">Salary : {salary}</span>
            </p>
            <p className="flex item-center  gap-4">
              <HiCalendarDays className="w-6 h-6 text-indigo-400" /> <span className="text-zinc-700">Job Title : {job_title}</span>
            </p>
          </div>
          <h2 className="text-lg text-gray-800 mb-8">Contact Information</h2>
          <div className="space-y-4 mb-4">
            <p className="flex item-center  gap-4">
              <HiOutlinePhone className="w-6 h-6 text-indigo-400" />
              <span className="text-zinc-700"> Phone : {phone}</span>
            </p>
            <p className="flex item-center  gap-4">
              <HiOutlineMail className="w-6 h-6 text-indigo-400" /> <span className="text-zinc-700"> Email : {email}</span>
            </p>
            <p className="flex item-center  gap-4">
              <HiOutlineLocationMarker className="w-6 h-6 text-indigo-400" />
              <span className="text-zinc-700">Address : {location}</span>
            </p>
          </div>

          <button onClick={() => setLocalStorage(id)} className="btn">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
