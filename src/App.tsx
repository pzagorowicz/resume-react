import React, { useEffect, useState } from 'react';
import Resume from './components/Resume/Resume';
import { ResumeModel } from './types/resume';

function App() {
  const [data, setData] = useState<ResumeModel>();

  useEffect(() => {
    fetch('./data/resume.json')
      .then((response) => response.json())
      .then((data) => {
        setData(data as ResumeModel);
      });
  }, []);

  return data ? <Resume {...data} /> : <p>no resume data</p>;
}

export default App;
