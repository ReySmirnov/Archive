import jobsData from "./jobsData";

export const getJobs = async (countElements, currentPage) => {
  return {
    jobs: jobsData.slice(
      (currentPage - 1) * countElements,
      currentPage*countElements
    ),
    countJobs: jobsData.length,
  };
};
