import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfileById } from '../../actions/profile';

const Profile = (props) => {
  return <div></div>;
};

Profile.propTypes = {
    profile: PropTypes.object.isRequired,,
    getProfileById: PropTypes.func.isRequired,
};
const mappedStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});
export default connect(mappedStateToProps, { getProfileById })(Profile);
