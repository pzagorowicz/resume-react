import React, { useEffect, useState } from 'react';
import ResumePreview from './features/resume-preview';
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

  return data ? <ResumePreview {...data} /> : <p>no resume data</p>;
}

export default App;
