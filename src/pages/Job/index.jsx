import { getJob, getJobs } from "../../services/jobs";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import jobsData from "../../data/jobsData";

const Job = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  useEffect(() => {
    getJob(id).then((jobData) => {setJob(jobData)});
  }, []);
  if (job === null) {
    return "loading";
  }
  return <div>
      <div>{job.id}</div>
      <div>{job.location}</div>
      <div>{job.description}</div>
  </div>;
};
export default Job;
