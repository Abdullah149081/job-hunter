import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AppliedDetails from "../ApplliedDetails/AppliedDetails";

const AppliedJobs = () => {
  const jobsApplied = useLoaderData();
  const [applies, setApplies] = useState(jobsApplied);
  // console.log(applies);

  const handlerRemote = () => {
    const remote = applies.filter((app) => app.remote_or_onsite === "Remote");
    setApplies(remote);
  };
  const handlerOnsite = () => {
    const onsite = applies.filter((app) => app.remote_or_onsite === "Onsite");
    setApplies(onsite);
  };

  return (
    <div className="px-4 py-16  md:px-24 lg:px-28 lg:py-20">
      <p className="text-center text-4xl font-bold text-gray-800">{applies.length > 0 ? <span>Applied Jobs</span> : <span>You're not applied any job</span>}</p>
      <div className="lg:mt-36 mt-24  lg:px-40 ">
        <div className="space-x-4 font-bold lg:text-right text-center">
          <button onClick={handlerRemote} className="btn">
            Remote
          </button>
          <button onClick={handlerOnsite} className="btn">
            On-site
          </button>
        </div>
        <div>
          {applies.map((applied) => (
            <AppliedDetails key={applied.id} applied={applied}></AppliedDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
