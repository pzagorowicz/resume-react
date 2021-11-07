import * as React from 'react';
import './Job.css';

type JobProps = {
  company: string;
  timeSpan: string;
  role: string;
  description: string;
};

const Job: React.FunctionComponent<JobProps> = ({
  company,
  timeSpan,
  role,
  description,
}) => {
  return (
    <div className='job'>
      <div className='job__company'>
        <h3>{company}</h3>
        <span>{timeSpan}</span>
      </div>
      <div className='job__role'>
        <h4>{role}</h4>
        <p className='description'>{description}</p>
      </div>
    </div>
  );
};

export default Job;
