import React from "react";
import sea from "../../../assets/sea.png";

const ProfileHeader = props => {
  // debugger;
  const addPost = () => {
    props.addPostActionCreator();
  };

  const onPostChange = e => {
    //   debugger;
    let text = e.target.value;
    props.upateNewPostActionCreator(text);
  };

  return (
    <div className="profile__header">
      <img className="profile__header-img" src={sea} alt="profile img" />
      <textarea
        className="profile__header-input"
        onChange={onPostChange}
        value={props.profilePage.newPostText}
        placeholder="Add post-text here"
        rows="5"
        cols="120"
      />
      <button className="btn" onClick={addPost}>
        Add post
      </button>
    </div>
  );
};

export default ProfileHeader;
