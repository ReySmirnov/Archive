import { getJob, Job as JobType } from "../../services/jobs";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Job = (): React.ReactElement => {
  const { id } = useParams<{ id: string | undefined }>();
  const [job, setJob] = useState<JobType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      getJob(id).then((jobData) => {
        setJob(jobData ? jobData : null);
        setIsLoading(false);
      });
    }
  }, []);
  if (!id) {
    return <>Error</>;
  }
  if (isLoading) {
    return <>loading</>;
  }
  if (!job) {
    return <>Job is not found</>;
  }
  return (
    <div>
      <div>{job.id}</div>
      <div>{job.location}</div>
      <div>{job.description}</div>
    </div>
  );
};
export default Job;
