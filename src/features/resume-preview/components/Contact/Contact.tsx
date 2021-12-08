import * as React from 'react';
import { Contact as ContactModel } from '../../../../types/resume';
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks';

type ContactProps = ContactModel;
const Contact: React.FunctionComponent<ContactProps> = ({
  email,
  mobile,
  dateOfBirth,
}) => {
  return (
    <section>
      <h2>Contact</h2>
      <div>
        <p>
          E-mail: <strong>{email}</strong>
        </p>
        <p>
          Mobile: <strong>{mobile}</strong>
        </p>
        <p>
          Date of birth: <strong>{dateOfBirth}</strong>
        </p>
      </div>
      <SocialMediaLinks />
    </section>
  );
};

export default Contact;
