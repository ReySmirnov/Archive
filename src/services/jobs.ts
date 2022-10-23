import jobsData from "../data/jobsData";
import { getCompany } from "./companies";
import { Company } from "./companies";

export type Job = {
  id: string;
  location: string | string[];
  title: string;
  tags: string[];
  company: string;
  description: string;
  workingHours: string[];
  url: string;
  salary?: { from: number; to: number; currency: "€" | "$" };
};
type JobContainer = { jobs: JobWithCompany[]; countJobs: number };
export type JobWithCompany = Job & {
  companyData: Company;
};

export const getJobs = async (
  countElements: number,
  currentPage: number
): Promise<JobContainer> => {
  const jobs: Job[] = jobsData.slice(
    (currentPage - 1) * countElements,
    currentPage * countElements
  );
  const idCompanies: string[] = jobs.map((job) => {
    return job.company;
  });

  const companies: Company[] = await Promise.all(
    idCompanies.map<Promise<Company>>((idCompany) => {
      return getCompany(idCompany) as Promise<Company>;
    })
  );
 const jobsWithCompanies: JobWithCompany[] = jobs.map((job, index) => {
    const companyData: Company = companies[index];
    return {
      ...job,
      companyData,
    };
  });
  return {
    jobs: jobsWithCompanies,
    countJobs: jobsData.length,
  };
};
export const getJob = async (id:string):Promise<Job|undefined> => {
  return jobsData.find((job) => {
    return id === job.id;
  });
};
