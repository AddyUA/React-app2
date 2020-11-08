import React from "react";
import Posts from "./Posts/Posts";

import ProfileHeaderContainer from "./ProfileHeader/ProfileHeaderContainer";

const Profile = (props) => {
  // debugger;
  let state = props.store.getState();

  const postElement = state.profilePage.posts.map((el) => (
    <Posts author={el.author} message={el.message} key={el.id} id={el.id} />
  ));

  return (
    <div className="profile">
      <ProfileHeaderContainer store={props.store} />
      {postElement}
    </div>
  );
};

export default Profile;
