import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Company as CompanyType, getCompany } from "../../services/companies";

const Company = (): React.ReactElement => {
  const { id } = useParams<{ id: string | undefined }>();
  const [company, setCompany] = useState<CompanyType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      getCompany(id).then((companyData) => {
        setCompany(companyData ? companyData : null);
        setIsLoading(false);
      });
    }
  });
  if (!id) {return <>Error</> }
  if (isLoading) {
    return <>loading</>;
  }
  if (!company) {
    return <>Company not found</>;
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
