import React from 'react';

export default function SuccessMessage() {
  return (
    <div className="form">
      <div style={{ flex: 1 }}>
        <div className="panel">
          <div
            style={{ color: '#5cb85c', fontSize: 20, fontWeight: 'bold', fontFamily: 'Helvetica' }}
          >
            Thank You!
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <i style={{ height: 20, width: 20, color: '#5cb85c' }} className="fa fa-check" />
            <div>File Successfully Uploaded.</div>
          </div>
          <div>Your records will be processed shortly.</div>
        </div>
      </div>
    </div>
  );
}
