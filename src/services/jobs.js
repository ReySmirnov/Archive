import jobsData from "../data/jobsData";

export const getJobs = async (countElements, currentPage) => {
  return {
    jobs: jobsData.slice(
      (currentPage - 1) * countElements,
      currentPage*countElements
    ),
    countJobs: jobsData.length,
  };
};
export const getJob = async (id) => {
    return jobsData.find((job)=>{
        return id === job.id})
}
