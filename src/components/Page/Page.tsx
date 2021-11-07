import * as React from 'react';
import './Page.css';

const Page: React.FunctionComponent<{}> = ({ children }) => {
  return <div className='page'>{children}</div>;
};

export default Page;
