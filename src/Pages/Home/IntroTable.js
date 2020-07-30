import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import FontAwesome from 'react-fontawesome';
import { withRouter } from "react-router";



import './IntroTable.css';
const IntroTable = ({data, history}) => {
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
              <tr key={job.id}>
                <td>{job.owner}</td>
                <td>{job.description}</td>
                <td>{job.location}</td>
                <td>{job.date}</td>
                <td>{job.payment}</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>  
      <Button className="intotable__btn" onClick={() => history.push("/jobs")}>
        <FontAwesome style={{paddingTop: 3}} name="angle-double-left" />
        <span>לכל העבודת</span> 
      </Button>           
    </div>
    );
}

export default withRouter(IntroTable);