import React from "react";
import PostsContainer from "./Posts/PostsContainer";

import ProfileHeaderContainer from "./ProfileHeader/ProfileHeaderContainer";

const Profile = props => {
  // debugger;
  return (
    <div className="profile">
      <ProfileHeaderContainer store={props.store} />
      <PostsContainer store={props.store} />
    </div>
  );
};

export default Profile;
