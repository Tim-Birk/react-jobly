import { useState, useEffect } from 'react';
import Spinner from './Spinner';
import JoblyApi from './JoblyAPI';
import CompanyCard from './CompanyCard';
import CompanySearchForm from './CompanySearchForm';
import './CompanyList.css';

const CompanyList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [companies, setCompanies] = useState([]);

  async function getCompanies(searchTerm) {
    let allCompanies = await JoblyApi.getCompanies(searchTerm);
    setCompanies(allCompanies);
    setIsLoading(false);
  }

  useEffect(() => {
    // Load companies from database and set global state for each array
    getCompanies();
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <div className='col-md-8 offset-md-2'>
      <CompanySearchForm getCompanies={getCompanies} />
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
