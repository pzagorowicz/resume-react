import React, { useEffect, useState } from 'react';
import ResumePreview from './features/resume-preview';
import { ResumeModel } from './types/resume';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [data, setData] = useState<ResumeModel>();

  useEffect(() => {
    fetch('./data/resume.json')
      .then((response) => response.json())
      .then((data) => {
        setData(data as ResumeModel);
      });
  }, []);

  if (!data) {
    return <p>no resume data</p>;
  }

  return (
    <Routes>
      <Route path='/' element={<ResumePreview {...data} />} />
    </Routes>
  );
}

export default App;
