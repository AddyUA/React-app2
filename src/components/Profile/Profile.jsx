import React from "react";
import PostsContainer from "./Posts/PostsContainer";

import ProfileHeaderContainer from "./ProfileHeader/ProfileHeaderContainer";

const Profile = () => {
  // debugger;
  return (
    <div className="profile">
      <ProfileHeaderContainer />
      <PostsContainer />
    </div>
  );
};

export default Profile;
