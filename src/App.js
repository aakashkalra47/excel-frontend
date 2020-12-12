import React, { useState } from 'react';
import './App.css';
import SuccessMessage from './components/SuccessMessage';
import FileInput from './components/FileInput';

export default function Form() {
  const [uploaded, setUploaded] = useState(false);

  return (
    <div>
      <div className="title">Add from Excel</div>
      <div className="container">
        <div className="lead subtitle">Add Candidates to Database</div>
        {uploaded ? <SuccessMessage /> : <FileInput setUploaded={setUploaded} />}
      </div>
    </div>
  );
}
