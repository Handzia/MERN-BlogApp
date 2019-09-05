import { connect } from 'react-redux';
import { getSinglePost, getRequest, loadSinglePostRequest, resetRequest } from '../../../redux/postsRedux';
import SinglePost from './SinglePost';

const mapStateToProps = state => ({
  post: getSinglePost(state),
  request: getRequest(state),
})

const mapDispatchToProps = dispatch => ({
  loadSinglePost: () => dispatch(loadSinglePostRequest()),
  resetRequest: () => dispatch(resetRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);