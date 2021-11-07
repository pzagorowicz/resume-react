import * as React from 'react';
import './PersonalDescription.css';

const PersonalDescription: React.FunctionComponent<{}> = () => {
  return (
    <>
      <h1>Piotr Zagórowicz</h1>
      <p className='personal description'>
        Professional .NET developer since 2013. I participated in projects in
        various business fields including sports, film, logistics, finance and
        banking. Focused on quality, interested in software design, automation
        and new technologies. Team player.
      </p>
    </>
  );
};

export default PersonalDescription;
