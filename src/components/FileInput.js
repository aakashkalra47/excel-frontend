import React, { useState } from 'react';
import { uploadFile } from '../api';
import UploadIcon from '../images/upload.png';

export default function FileInput({ setUploaded }) {
  const [file, setFile] = useState();
  const [error, setError] = useState('');

  const onChange = (event) => {
    const file = event.target.files[0];

    if (!(file.name && file.name.match(/\.(xls|xlsx)$/))) {
      event.target.value = null;
      setError('Oops! Invalid file format.');
      setFile(null);
    } else {
      setError('');
      setFile(file);
    }
  };

  const onSubmit = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file, file.name);
      try {
        const response = uploadFile(formData);

        if (response.status === 200) {
          setUploaded(true);
        }
      } catch (error) {
        setError('Something went wrong');
      }
    }
  };

  return (
    <div className="form">
      <label htmlFor="upload-excel">
        <div className="panel">
          <div className="icon">
            <img src={UploadIcon} alt="Click to Upload" />
          </div>
          {file || error ? (
            <div style={error ? { marginTop: 10, color: 'red' } : { marginTop: 10 }}>
              {error || file.name}
            </div>
          ) : (
            <div style={{ marginTop: 20 }}>Upload a .xlsx or .xls file here</div>
          )}
          {(file || error) && (
            <button className="btn btn-success button" onClick={onSubmit}>
              Submit
            </button>
          )}
        </div>
      </label>
      <input onChange={onChange} type="file" name="excel" id="upload-excel" />
    </div>
  );
}
