import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const [details, setDetails] = useState({});
  const id = useParams();
  const jobs = useLoaderData();

  useEffect(() => {
    if (jobs) {
      const newSet = jobs.find((job) => job.id == id.Id);
      setDetails(newSet);
    }
  }, []);
  
  return <div></div>;
};

export default JobDetails;
