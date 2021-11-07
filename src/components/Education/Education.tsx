import * as React from 'react';
import EducationItem from './EducationItem';

type EducationProps = {};

const Education: React.FunctionComponent<EducationProps> = (props) => {
  return (
    <section>
      <h2>Education</h2>
      <EducationItem
        timeSpan={{ since: new Date(2014, 3), to: new Date(2015, 7) }}
        school='Warsaw University of Life Sciences'
        faculty='Faculty of Applied Informatics and Mathematics'
        title='Master of Science'
      />
      <EducationItem
        timeSpan={{ since: new Date(2010, 10), to: new Date(2014, 2) }}
        school='Warsaw University of Life Sciences'
        faculty='Faculty of Applied Informatics and Mathematics'
        title='Bachelor of Science'
      />
    </section>
  );
};

export default Education;
