import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGitHubRepos } from '../../actions/profile';
import Spinner from '../layout/Spinner';

const ProfileGithub = ({ username, getGitHubRepos, repos }) => {
  useEffect(() => {
    getGitHubRepos(username);
  }, [getGitHubRepos, username]);
  return <div>hello</div>;
};

ProfileGithub.propTypes = {
  getGitHubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
};
const mappedToStateToProps = (state) => ({
  repos: state.profile.repos,
});
export default connect(mappedToStateToProps, { getGitHubRepos })(ProfileGithub);
