import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PostItem from '../Posts/PostItem';
import Spinner from '../layout/Spinner';
import { getPostById } from '../../actions/post';

const Post = ({ getPostById, post: { post, loading }, match }) => {
  useEffect(() => {
    getPostById(match.params.id);
  }, [getPostById, match.params.id]);
  return loading || post === null ? (
    <Spinner />
  ) : (
    <>
      <PostItem post={post} showActions={false} />
    </>
  );
};

Post.propTypes = {
  getPostById: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};
const mappedStateToProps = (state) => ({
  post: state.post,
});

export default connect(mappedStateToProps, { getPostById })(Post);
