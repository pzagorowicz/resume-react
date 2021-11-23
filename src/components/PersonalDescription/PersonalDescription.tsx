import * as React from 'react';
import './PersonalDescription.css';

type PersonalDescriptionProps = {
  name: string;
  description: string;
};

const PersonalDescription: React.FunctionComponent<PersonalDescriptionProps> =
  ({ name, description }) => {
    return (
      <>
        <h1>{name}</h1>
        <p className='personal description'>{description}</p>
      </>
    );
  };

export default PersonalDescription;
