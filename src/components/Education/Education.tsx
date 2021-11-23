import * as React from 'react';
import { Education as EducationModel } from '../../types/resume';
import EducationItem from './EducationItem';

type EducationProps = {
  schools: EducationModel[];
};

const Education: React.FunctionComponent<EducationProps> = ({ schools }) => {
  return (
    <section>
      <h2>Education</h2>
      {schools.map((school, index) => {
        const { since, to, ...rest } = school;
        return (
          <EducationItem
            key={index}
            timeSpan={{ since: new Date(since), to: new Date(to) }}
            {...rest}
          />
        );
      })}
    </section>
  );
};

export default Education;
