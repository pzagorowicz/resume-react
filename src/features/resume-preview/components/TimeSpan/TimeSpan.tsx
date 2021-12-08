import * as React from 'react';

export type TimeSpan = {
  since: Date;
  to?: Date;
};

type TimeSpanProps = {
  timeSpan: TimeSpan;
};

const formatDate = (date?: Date): string | undefined => {
  return date && `${date.getMonth()}.${date.getFullYear()}`;
};

const TimeSpanComponent: React.FunctionComponent<TimeSpanProps> = ({
  timeSpan,
}) => {
  const { since, to } = timeSpan;
  const sinceText = formatDate(since);
  const toText = formatDate(to) || 'presently';

  return <span>{`${sinceText} - ${toText}`}</span>;
};

export default TimeSpanComponent;
