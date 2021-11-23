import * as React from 'react';
import { ResumeModel } from '../../types/resume';
import Abilities from '../Abilities/Abilities';
import Consent from '../Consent/Consent';
import Contact from '../Contact/Contact';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Page from '../Page/Page';
import PersonalDescription from '../PersonalDescription/PersonalDescription';
import PersonalPhoto from '../PersonalPhoto/PersonalPhoto';
import './Resume.css';

type ResumeProps = ResumeModel;

const Resume: React.FunctionComponent<ResumeProps> = ({
  name,
  description,
  contact,
  abilities,
  experience,
  education,
}) => {
  return (
    <Page>
      <div className='resume'>
        <aside className='column column--left'>
          <PersonalPhoto />
          <Contact {...contact} />
          <Abilities abilities={abilities} />
        </aside>
        <div className='column column--right'>
          <PersonalDescription name={name} description={description} />
          <Experience jobs={experience} />
          <Education schools={education} />
        </div>
      </div>
      <Consent />
    </Page>
  );
};

export default Resume;
