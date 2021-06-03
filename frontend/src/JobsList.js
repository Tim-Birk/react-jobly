import { useState, useEffect } from 'react';
import Spinner from './Spinner';
import JoblyApi from './JoblyAPI';
import JobCard from './JobCard';
import JobSearchForm from './JobSearchForm';
import './JobsList.css';

const JobsList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  async function getJobs(searchTerm) {
    let allJobs = await JoblyApi.getJobs(searchTerm);
    setJobs(allJobs);
    setIsLoading(false);
  }

  useEffect(() => {
    // Load jobs from database and set global state for each array
    getJobs();
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <div className='col-md-8 offset-md-2'>
      <JobSearchForm getJobs={getJobs} />
      <ul className='jobs-list'>
        {jobs
          ? jobs.map((job) => (
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

export default JobsList;
