import * as React from 'react';
import { Job as JobModel } from '../../types/resume';
import Job from '../Job/Job';

type ExperienceProps = { jobs: JobModel[] };

const App: React.FunctionComponent<ExperienceProps> = ({ jobs }) => {
  return (
    <section>
      <h2>Experience</h2>
      {jobs.map((job, index) => {
        return <Job key={index} {...job} />;
      })}
    </section>
  );
};

export default App;
