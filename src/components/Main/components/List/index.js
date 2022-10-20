import "./index.css";
import ListItem from "./components/ListItem";
import { getJobs } from "../../../services/jobs";
import { useEffect, useState } from "react";
import Btn from "../SubscribeBlock/components/Btn";

const List = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [countPage, setCountPage] = useState(1);

  useEffect(() => {
    getJobs(5, currentPage).then((jobsData) => {
      setJobs(jobsData.jobs);
      setCountPage(Math.ceil(jobsData.countJobs / 5));
    });
  }, [currentPage]);

  if (jobs.length === 0) {
    return "loading";
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
