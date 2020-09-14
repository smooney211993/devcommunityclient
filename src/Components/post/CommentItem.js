import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { deleteComment } from '../../actions/post';

const CommentItem = ({
  postId,
  auth,
  comment: { _id, text, name, avatar, user, date },
  deleteComment,
}) => {
  return (
    <div>
      <div className='post bg-white p-1 my-1'>
        <div>
          <Link to={`profile/${user}`}>
            <img className='round-img' src={avatar} alt='' />
            <h4>{name}</h4>
          </Link>
        </div>
        <div>
          <p className='my-1'>{text}</p>
          <p className='post-date'>
            Posted on <Moment format='DD/MM/YYYY'>{date}</Moment>
          </p>
          {!auth.loading && user === auth.user._id && (
            <>
              <button
                type='button'
                className='btn btn-danger'
                onClick={(e) => deleteComment(postId, _id)}>
                <i className='fas fa-times'></i> Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

CommentItem.propTypes = {
  postId: PropTypes.number.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
};
const mappedStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mappedStateToProps, { deleteComment })(CommentItem);
