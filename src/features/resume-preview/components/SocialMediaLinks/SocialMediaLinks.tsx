import * as React from 'react';
import githubLogo from '../../assets/GitHub-Mark-32px.png';
import linkedinLogo from '../../assets/linkedin-logo.png';
import './SocialMediaLinks.css';

const SocialMediaLinks: React.FunctionComponent<{}> = () => {
  return (
    <>
      <a
        className='link'
        href='https://www.linkedin.com/in/piotr-zagorowicz-99707781/'
        target='_blank'
        rel='noreferrer'
      >
        <img src={linkedinLogo} alt='linkedin logo' />
        <span>Linkedin</span>
      </a>
      <a
        className='link'
        href='https://github.com/pzagorowicz'
        target='_blank'
        rel='noreferrer'
      >
        <img src={githubLogo} alt='github logo' />
        <span>Github</span>
      </a>
    </>
  );
};

export default SocialMediaLinks;
