import { connect } from "react-redux";

import Posts from "./Posts";
import { deletePostActionCreator } from "../../../redux/profile-reducer";

const mapStatetoProps = state => {
  return {
    profilePage: state.profilePage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deletePostActionCreator: (author, id) => {
      dispatch(deletePostActionCreator(author, id));
    }
  };
};

const PostsContainer = connect(mapStatetoProps, mapDispatchToProps)(Posts);

export default PostsContainer;
