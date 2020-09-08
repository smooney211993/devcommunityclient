import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

export const Dashboard = () => {
  return <div>Dashboard</div>;
};

Dashboard.propTypes = {};

export default connect()(Dashboard);
