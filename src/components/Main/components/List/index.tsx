import "./index.css";
import ListItem from "./components/ListItem";
import {getJobs, Job, JobWithCompany} from "../../../../services/jobs";
import React, { useEffect, useState } from "react";
import Btn from "../../../Button";
import { useNavigate, useParams } from "react-router-dom";
import {Box} from "@mui/material";
import {grey} from "@mui/material/colors";



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
      <Box display="flex" alignItems={"center"}>
        <Btn
          type={"secondary"}
          color={"grey"}
          size={"small"}
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev page
        </Btn>
        <Box padding={"10px"}>{currentPage}</Box>
        <Btn
          type={"secondary"}
          color={"grey"}
          size={"small"}
          disabled={currentPage === countPage}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next page
        </Btn>
      </Box>
    </div>
  );
};
export default List;
