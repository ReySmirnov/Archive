import "./index.css";
import ListItem from "./components/ListItem";
import {getJobs, Job, JobWithCompany} from "../../../../services/jobs";
import React, { useEffect, useState } from "react";
import Btn from "../SubscribeBlock/components/Btn";
import { useNavigate, useParams } from "react-router-dom";



const List = ():React.ReactElement => {
  const [jobs, setJobs] = useState<JobWithCompany[]>([]);
  const [countPage, setCountPage] = useState<number>(1);
  const { page = 1 } = useParams<{page:string|undefined}>();
  const currentPage:number = Number(page);
  const navigate = useNavigate();
  useEffect(() => {
    getJobs(5, currentPage).then((jobsData) => {
      setJobs(jobsData.jobs);
      setCountPage(Math.ceil(jobsData.countJobs / 5));
    });
  }, [currentPage]);
  const setCurrentPage = (nextPage:number) => {
    navigate(`/${nextPage}`);
  };

  if (jobs.length === 0) {
      return <>loading</>;
  }

  return (
    <div>
      <ul className="list-content">
        {jobs.map((job) => (
          <ListItem {...job} />
        ))}
      </ul>
      <div>
        <Btn
          type={"secondary"}
          color={"grey"}
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev page
        </Btn>
        {currentPage}
        <Btn
          type={"secondary"}
          color={"grey"}
          disabled={currentPage === countPage}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next page
        </Btn>
      </div>
    </div>
  );
};
export default List;
