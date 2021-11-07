import * as React from 'react';
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks';

const Contact: React.FunctionComponent<{}> = () => {
  return (
    <section>
      <h2>Contact</h2>
      <div>
        <p>
          E-mail: <strong>piotr.zagorowicz@gmail.com</strong>
        </p>
        <p>
          Mobile: <strong>726-781-091</strong>
        </p>
        <p>
          Date of birth: <strong>16.04.1991</strong>
        </p>
      </div>
      <SocialMediaLinks />
    </section>
  );
};

export default Contact;
