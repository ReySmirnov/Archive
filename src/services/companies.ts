import companies from "../data/companies";

export type Company = {
      id: string;
      title: string;
      logo: string;
      logoBackground?: string|null;
      shortDescription: string;
      description: string;
      techStack: string[];
      workCulture: string[];
      benefits: string[];
      url: string;
      tags: string[];
    };
export const getCompany = async (id: string): Promise<Company|undefined> => {
  return companies.find((company) => {
    return id === company.id;
  });
};
