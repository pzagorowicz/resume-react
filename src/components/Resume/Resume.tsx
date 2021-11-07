import * as React from 'react';
import Abilities from '../Abilities/Abilities';
import Consent from '../Consent/Consent';
import Contact from '../Contact/Contact';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Page from '../Page/Page';
import PersonalDescription from '../PersonalDescription/PersonalDescription';
import PersonalPhoto from '../PersonalPhoto/PersonalPhoto';
import './Resume.css';

const Resume: React.FunctionComponent<{}> = () => {
  return (
    <Page>
      <div className='resume'>
        <aside className='column column--left'>
          <PersonalPhoto />
          <Contact />
          <Abilities />
        </aside>
        <div className='column column--right'>
          <PersonalDescription />
          <Experience />
          <Education />
        </div>
      </div>
      <Consent />
    </Page>
  );
};

export default Resume;
