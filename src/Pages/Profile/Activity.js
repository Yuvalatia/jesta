import React from "react";
import Table from "react-bootstrap/Table";

import "./Activity.css";
const Activity = (props) => {
  return (
    <div className="activity__container">
      <Table responsive size="sm" className="activity__jobstable">
        <thead>
          <tr>
            <th>מספר עבודה #</th>
            <th>פירוט</th>
            <th>סטטוס</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default Activity;
