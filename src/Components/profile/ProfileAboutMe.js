import React from 'react';
import PropTypes from 'prop-types';

const ProfileAboutMe = ({
  profile: {
    bio,
    skills,
    user: { name },
  },
}) => {
  return <div></div>;
};

ProfileAboutMe.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAboutMe;
