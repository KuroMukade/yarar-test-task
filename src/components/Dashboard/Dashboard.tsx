import React from 'react';

import ProfileFill from '../ProfileFill/ProfileFill';
import Requests from '../Requests/Requests';
import Notions from '../Notions/Notions';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <ProfileFill />
        <div className="dashboard-body">
            <Requests />
            <Notions />
            <Notions />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
