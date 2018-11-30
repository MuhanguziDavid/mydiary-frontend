import React from 'react';
import Entries from '../entries/Entries';

const Dashboard = (props) => (
  <div className="dashboard">
    <div className="container">
      <section className="mainbar-dashboard">
        <div>
          <h1>Entries</h1>
        </div>
        <Entries {...props} />
      </section>
    </div>
  </div>
);

export default Dashboard;
