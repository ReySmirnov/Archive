import jobsData from "../data/jobsData";
import { getCompany } from "./companies";

export const getJobs = async (countElements, currentPage) => {
  const jobs = jobsData.slice(
    (currentPage - 1) * countElements,
    currentPage * countElements
  );
  const idCompanies = jobs.map((job) => {
    return job.company;
  });

  const companies = await Promise.all(
    idCompanies.map((idCompany) => {
      return getCompany(idCompany);
    })
  );
  const jobsWithCompanies = jobs.map((job, index)=>{
      const companyData = companies[index];
      return {
          ...job,
          companyData
      }
  })
  return {
    jobs: jobsWithCompanies,
    countJobs: jobsData.length,
  };
};
export const getJob = async (id) => {
  return jobsData.find((job) => {
    return id === job.id;
  });
};
