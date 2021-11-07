import * as React from 'react';
import TimeSpanComponent, { TimeSpan } from '../TimeSpan/TimeSpan';

type EducationItemProps = {
  timeSpan: TimeSpan;
  school: string;
  faculty?: string;
  title?: string;
};

const EducationItem: React.FunctionComponent<EducationItemProps> = ({
  timeSpan,
  school,
  faculty,
  title,
}) => {
  return (
    <div>
      <TimeSpanComponent timeSpan={timeSpan} />
      <h3>{school}</h3>
      {faculty && <p>{faculty}</p>}
      {title && <p>{title}</p>}
    </div>
  );
};

export default EducationItem;
