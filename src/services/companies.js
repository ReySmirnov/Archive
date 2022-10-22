import companies from "../data/companies";

export const getCompany = async (id) => {
  return companies.find((company) => {
    return id === company.id;
  });
};