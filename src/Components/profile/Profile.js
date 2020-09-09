import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfileById } from '../../actions/profile';
import Spinner from '../layout/Spinner';

const Profile = ({
  match,
  getProfileById,
  profile: { profile, loading },
  auth,
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById]);
  return <div>profile</div>;
};

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
  getProfileById: PropTypes.func.isRequired,
};
const mappedStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});
export default connect(mappedStateToProps, { getProfileById })(Profile);
