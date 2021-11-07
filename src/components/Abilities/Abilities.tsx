import * as React from 'react';
import List from '../List/List';

const Abilities: React.FunctionComponent<{}> = () => {
  return (
    <>
      <Technologies />
      <Skills />
      <Tools />
      <Languages />
    </>
  );
};

const Technologies: React.FunctionComponent<{}> = () => {
  return (
    <List
      title='Technologies'
      items={[
        'C#',
        '.NET, .NET Core',
        'JavaScript/TypeScript',
        'React.js',
        'HTML, CSS',
        'ASP.NET MVC',
        'SQL Server, T-SQL',
        'Windows Forms',
      ]}
    />
  );
};

const Skills: React.FunctionComponent<{}> = () => {
  return (
    <List
      title='Skills'
      items={[
        'Clean code',
        'Unit testing',
        'Analytical skills',
        'Troubleshooting',
        'Scrum',
      ]}
    />
  );
};

const Tools: React.FunctionComponent<{}> = () => {
  return (
    <List
      title='Tools'
      items={[
        'Visual Studio',
        'Visual Studio Code',
        'Management Studio',
        'Azure DevOps',
        'Git',
        'Jira',
        'Bitbucket',
        'TeamCity',
        'Postman',
      ]}
    />
  );
};

const Languages: React.FunctionComponent<{}> = () => {
  return <List title='Tools' items={['polish - native', 'english - B1']} />;
};

export default Abilities;
