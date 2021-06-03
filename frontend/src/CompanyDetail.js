import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from './Spinner';
import JoblyApi from './JoblyAPI';
import JobCard from './JobCard';
import './CompanyDetail.css';

const CompanyDetail = ({}) => {
  const { handle } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [company, setCompany] = useState({});

  useEffect(() => {
    async function getCompanyDetail() {
      let companyDetail = await JoblyApi.getCompany(handle);
      setCompany(companyDetail);
      setIsLoading(false);
    }

    // Load company from database and set global state for each array
    getCompanyDetail();
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <div className='col-md-8 offset-md-2'>
      <h1 className='mt-4'>{company.name}</h1>
      <p>{company.description}</p>
      <ul className='job-list'>
        {company.jobs
          ? company.jobs.map((job) => (
              <li key={job.id}>
                <JobCard
                  id={job.id}
                  title={job.title}
                  salary={job.salary}
                  equity={job.equity}
                />
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default CompanyDetail;
