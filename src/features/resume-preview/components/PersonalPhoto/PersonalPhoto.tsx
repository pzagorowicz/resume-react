import * as React from 'react';
import profilePhoto from '../../assets/profile.jpg';
import './PersonalPhoto.css';

const PersonalPhoto: React.FunctionComponent<{}> = () => {
  return <img src={profilePhoto} alt='personal' className='photo' />;
};

export default PersonalPhoto;
