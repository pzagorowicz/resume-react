import * as React from 'react';
import Job from '../Job/Job';

const App: React.FunctionComponent<{}> = () => {
  return (
    <section>
      <h2>Experience</h2>
      <Job
        company='GS Services'
        timeSpan='7.2021 – presently'
        role='Fullstack .NET Developer'
        description='Working on international project for global leader of the ocean
            shipping industry. Developing and maintaining Azure hosted app being
            a part of complex logistic solution.'
      />
      <Job
        company='Transition Technologies PSC Sp. z o.o.'
        timeSpan='10.2020 – 6.2021 [9 months]'
        role='React Developer'
        description='Working on international project in scaled SCRUM for one of the
    leading companies in the manufacturing industry. Developing multiple
    web applications using React, Redux and Typescript in microfrontends
    approach.'
      />
      <Job
        company='mBank S.A. (ITMAGINATION Consultant)'
        timeSpan='02.2018 – 09-2020 [2 years 9 months]'
        role='Fullstack .NET Developer'
        description='Working on the online retail banking system, developing new frontend
            app built from scratch using React, Redux and Typescript. Taking
            care of cross-browser compatibility, accessibility and responsive
            web design. Maintaining an analytical system based on Apache Storm,
            Kafka and Java. Cooperating with business stakeholders and different
            teams using Scrum methodology.'
      />

      <Job
        company='ITMAGINATION'
        timeSpan='05.2016 – 02.2018 [1 year 10 months]'
        role='.NET Developer'
        description='Working on a financial platform targeting SME sector. Designing,
            developing, unit-testing, documenting and maintaining code of
            business processes in multiple web applications. Integrating with
            various external systems, e.g. banking, online payments, public.'
      />
      <Job
        company='Benson Consultants'
        timeSpan='05.2015 – 04.2016 [1 year]'
        role='.NET Developer'
        description='Development and maintenance of logistic systems. Implementation of
            genetic algorithms for the problem of routing vehicles.'
      />
      <Job
        company='Derget IT Outsourcing'
        timeSpan='07.2013 – 04.2015 [1 year 10 months]'
        role='.NET Developer'
        description='Development of a system for running sport competitions. Design and
            implementation of a database system for a film industry distributor.'
      />
    </section>
  );
};

export default App;
