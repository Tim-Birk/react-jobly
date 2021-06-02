import { useState, useEffect } from 'react';
import Spinner from './Spinner';
import JoblyApi from './JoblyAPI';

const CompanyList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function getCompanies() {
      let companies = await JoblyApi.getCompanies();
      setCompanies(companies);
      // let drinks = await SnackOrBoozeApi.getMenuItems();
      // setDrinks(drinks);
      //   setIsLoading(false);
    }

    // Load companies from database and set global state for each array
    getCompanies();
  }, []);

  if (isLoading) return <Spinner />;

  return <div>Company List</div>;
};

export default CompanyList;
