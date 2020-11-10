import React from "react";
import Posts from "./Posts";
import { deletePostActionCreator } from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";

const PostsContainer = (props) => {
  // debugger;

  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        const onDeletePost = (author, id) => {
          store.dispatch(deletePostActionCreator(author, id));
        };
        return <Posts deletePostActionCreator={onDeletePost} state={state} />;
      }}
    </StoreContext.Consumer>
  );
};

export default PostsContainer;
