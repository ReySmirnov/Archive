import jobsData from "./jobsData";

export const getJobs = async (countElements) => {
  return jobsData.slice(0, countElements);
};
