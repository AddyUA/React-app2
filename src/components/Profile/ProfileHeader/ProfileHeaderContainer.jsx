import React, { Component } from "react";
import ProfileHeader from "./ProfileHeader";
import {
  addPostActionCreator,
  upateNewPostActionCreator,
} from "../../../redux/profile-reducer";

class ProfileHeaderContainer extends Component {
  render() {
    // debugger;
    let state = this.props.store.getState();

    const addPost = () => {
      this.props.store.dispatch(addPostActionCreator());
    };

    const onPostChange = (text) => {
      //   debugger;
      let action = upateNewPostActionCreator(text);
      this.props.store.dispatch(action);
    };

    return (
      <ProfileHeader
        upateNewPostActionCreator={onPostChange}
        addPostActionCreator={addPost}
        state={state}
      />
    );
  }
}

export default ProfileHeaderContainer;
