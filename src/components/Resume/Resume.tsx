import * as React from 'react';
import profilePhoto from '../../images/profile.jpg';
import githubLogo from '../../images/GitHub-Mark-32px.png';
import linkedinLogo from '../../images/linkedin-logo.png';
import './Resume.css';

const Resume: React.FunctionComponent<{}> = () => {
  return (
    <div className='container'>
      <div className='resume'>
        <aside className='column column--left'>
          <img src={profilePhoto} alt='personal' className='photo' />
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
            </div>
          </section>
          <section className='abilities'>
            <h2>Technologies</h2>
            <ul className='abilities__list'>
              <li>C#</li>
              <li>.NET, .NET Core</li>
              <li>JavaScript/TypeScript</li>
              <li>React.js</li>
              <li>HTML, CSS</li>
              <li>ASP.NET MVC</li>
              <li>SQL Server, T-SQL</li>
              <li>Windows Forms</li>
            </ul>
          </section>
          <section className='abilities'>
            <h2>Skills</h2>
            <ul className='abilities__list'>
              <li>Clean code</li>
              <li>Unit testing</li>
              <li>Analytical skills</li>
              <li>Troubleshooting</li>
              <li>Scrum</li>
            </ul>
          </section>
          <section className='abilities'>
            <h2>Tools</h2>
            <ul className='abilities__list'>
              <li>Visual Studio</li>
              <li>Visual Studio Code</li>
              <li>Management Studio</li>
              <li>Azure DevOps</li>
              <li>Git</li>
              <li>Jira</li>
              <li>Bitbucket</li>
              <li>TeamCity</li>
              <li>Postman</li>
            </ul>
          </section>
          <section className='abilities'>
            <h2>Languages</h2>
            <ul className='abilities__list'>
              <li>polish - native</li>
              <li>english - B1</li>
            </ul>
          </section>
        </aside>
        <div className='column column--right'>
          <h1>Piotr Zagórowicz</h1>
          <p className='personal description'>
            Professional .NET developer since 2013. I participated in projects
            in various business fields including sports, film, logistics,
            finance and banking. Focused on quality, interested in software
            design, automation and new technologies. Team player.
          </p>
          <section>
            <h2>Experience</h2>
            <div className='job'>
              <div className='job__company'>
                <h3>GS Services</h3>
                <span>7.2021 – presently</span>
              </div>
              <div className='job__role'>
                <h4>Fullstack .NET Developer</h4>
                <p className='description'>
                  Working on international project for global leader of the
                  ocean shipping industry. Developing and maintaining Azure
                  hosted app being a part of complex logistic solution.
                </p>
              </div>
            </div>
            <div className='job'>
              <div className='job__company'>
                <h3>Transition Technologies PSC Sp. z o.o.</h3>
                <span>10.2020 – 6.2021 [9 months]</span>
              </div>
              <div className='job__role'>
                <h4>React Developer</h4>
                <p className='description'>
                  Working on international project in scaled SCRUM for one of
                  the leading companies in the manufacturing industry.
                  Developing multiple web applications using React, Redux and
                  Typescript in microfrontends approach.
                </p>
              </div>
            </div>
            <div className='job'>
              <div className='job__company'>
                <h3>mBank S.A. (ITMAGINATION Consultant)</h3>
                <span>02.2018 – 09-2020 [2 years 9 months]</span>
              </div>
              <div className='job__role'>
                <h4>Fullstack .NET Developer</h4>
                <p className='description'>
                  Working on the online retail banking system, developing new
                  frontend app built from scratch using React, Redux and
                  Typescript. Taking care of cross-browser compatibility,
                  accessibility and responsive web design. Maintaining an
                  analytical system based on Apache Storm, Kafka and Java.
                  Cooperating with business stakeholders and different teams
                  using Scrum methodology.
                </p>
              </div>
            </div>
            <div className='job'>
              <div className='job__company'>
                <h3>ITMAGINATION</h3>
                <span>05.2016 – 02.2018 [1 year 10 months]</span>
              </div>
              <div className='job__role'>
                <h4>.NET Developer</h4>
                <p className='description'>
                  Working on a financial platform targeting SME sector.
                  Designing, developing, unit-testing, documenting and
                  maintaining code of business processes in multiple web
                  applications. Integrating with various external systems, e.g.
                  banking, online payments, public.
                </p>
              </div>
            </div>
            <div className='job'>
              <div className='job__company'>
                <h3>Benson Consultants</h3>
                <span>05.2015 – 04.2016 [1 year]</span>
              </div>
              <div className='job__role'>
                <h4>.NET Developer</h4>
                <p className='description'>
                  Development and maintenance of logistic systems.
                  Implementation of genetic algorithms for the problem of
                  routing vehicles.
                </p>
              </div>
            </div>
            <div className='job'>
              <div className='job__company'>
                <h3>Derget IT Outsourcing</h3>
                <span>07.2013 – 04.2015 [1 year 10 months]</span>
              </div>
              <div className='job__role'>
                <h4>.NET Developer</h4>
                <p className='description'>
                  Development of a system for running sport competitions. Design
                  and implementation of a database system for a film industry
                  distributor.
                </p>
              </div>
            </div>
          </section>
          <section>
            <h2>Education</h2>
            <div>
              <span>03.2014 – 07.2015</span>
              <h3>Warsaw University of Life Sciences</h3>
              <p>Faculty of Applied Informatics and Mathematics</p>
              <p>Master of Science</p>
            </div>
            <div>
              <span>10.2010 – 02.2014</span>
              <h3>Warsaw University of Life Sciences</h3>
              <p>Faculty of Applied Informatics and Mathematics</p>
              <p>Bachelor of Science</p>
            </div>
          </section>
        </div>
      </div>
      <footer>
        I hereby give consent for my personal data included in the application
        to be processed for the purposes of the recruitment process in
        accordance with Art. 6 paragraph 1 letter a of the Regulation of the
        European Parliament and of the Council (EU) 2016/679 of 27 April 2016 on
        the protection of natural persons with regard to the processing of
        personal data and on the free movement of such data, and repealing
        Directive 95/46/EC (General Data Protection Regulation)
      </footer>
    </div>
  );
};

export default Resume;
