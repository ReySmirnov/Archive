import "./index.css";
import ListItem from "./components/ListItem";
import jobs from "./jobs";

const List = () => {
  return (
    <ul className="list-content">
      {jobs.map((job) => (
        <ListItem description={job.description} {...job} />
      ))}
    </ul>
  );
};
export default List;
