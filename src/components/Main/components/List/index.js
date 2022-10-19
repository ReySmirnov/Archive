import "./index.css";
import ListItem from "./components/ListItem";
import { getJobs } from "../../../services/jobs";
import {useEffect, useState} from "react";

const List = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
      getJobs(5).then((data) => {
          setJobs(data)
      })
  }, [])

  if (jobs.length === 0) {
    return "loading";
  }

  return (
    <ul className="list-content">
      {jobs.map((job) => (
        <ListItem {...job} />
      ))}
    </ul>
  );
};
export default List;
