import React from 'react';
import Table from 'react-bootstrap/Table';


import './IntroTable.css';
const IntroTable = ({data}) => {
    return(
      <div className="introtable__container">
          <div className="introtable__inner__container">
            <Table responsive striped hover size="sm" className="introtable__table">
          <thead>
            <tr>
              <th>מפרסם</th>
              <th>עבודה</th>
              <th>מיקום</th>
              <th>תאריך ושעה</th>
              <th>תשלום</th>
            </tr>
          </thead>
          <tbody>
            {data.map((job) => 
              <tr id={job.id}>
                <th>{job.owner}</th>
              </tr>
            )}
          </tbody>
        </Table>
      </div>             
    </div>
    );
}

export default IntroTable;