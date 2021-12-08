import React, { useEffect } from 'react';
import ResumePreview from './features/resume-preview';
import { ResumeModel } from './types/resume';
import { Routes, Route } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { selectResume, updateResume } from './redux/reducer';

function App() {
  const resume = useAppSelector(selectResume);
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch('./data/resume.json')
      .then((response) => response.json())
      .then((data) => {
        dispatch(updateResume(data as ResumeModel));
      });
  }, [dispatch]);

  if (!resume) {
    return <p>no resume data</p>;
  }

  return (
    <Routes>
      <Route path='/' element={<ResumePreview {...resume} />} />
    </Routes>
  );
}

export default App;
