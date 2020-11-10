import React, { Component } from "react";
import ProfileHeader from "./ProfileHeader";
import {
  addPostActionCreator,
  upateNewPostActionCreator,
} from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";

class ProfileHeaderContainer extends Component {
  render() {
    return (
      <StoreContext.Consumer>
        {(store) => {
          // debugger;
          let state = store.getState();

          const addPost = () => {
            store.dispatch(addPostActionCreator());
          };

          const onPostChange = (text) => {
            //   debugger;
            let action = upateNewPostActionCreator(text);
            store.dispatch(action);
          };
          return (
            <ProfileHeader
              upateNewPostActionCreator={onPostChange}
              addPostActionCreator={addPost}
              state={state}
            />
          );
        }}
      </StoreContext.Consumer>
    );
  }
}

export default ProfileHeaderContainer;
