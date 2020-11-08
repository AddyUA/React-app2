import React from "react";
import Posts from "./Posts";
import { deletePostActionCreator } from "../../../redux/profile-reducer";

const PostsContainer = props => {
  // debugger;
  let state = props.store.getState();

  const onDeletePost = (author, id) => {
    props.store.dispatch(deletePostActionCreator(author, id));
  };

  return <Posts deletePostActionCreator={onDeletePost} state={state} />;
};

export default PostsContainer;
