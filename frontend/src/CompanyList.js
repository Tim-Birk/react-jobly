import { useState, useEffect } from 'react';
import Spinner from './Spinner';
import JoblyApi from './JoblyAPI';
import CompanyCard from './CompanyCard';
import './CompanyList.css';

const CompanyList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function getCompanies() {
      let allCompanies = await JoblyApi.getCompanies();
      setCompanies(allCompanies);
      setIsLoading(false);
    }

    // Load companies from database and set global state for each array
    getCompanies();
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <div className='col-md-8 offset-md-2'>
      <ul className='company-list'>
        {companies
          ? companies.map((company) => (
              <li key={company.handle}>
                <CompanyCard
                  handle={company.handle}
                  name={company.name}
                  description={company.description}
                  logo={company.logoUrl}
                />
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default CompanyList;
