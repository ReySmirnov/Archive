import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCompany } from "../../services/companies";

const Company = () => {
  const { id } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    getCompany(id).then((companyData) => setCompany(companyData));
  });
  if (company === null) {
    return "loading";
  }
  return (
    <div>
      <ul>
        <li>{company.title}</li>
        <li>{company.logo}</li>
        <li>{company.description}</li>
      </ul>
      ;
    </div>
  );
};
export default Company;
