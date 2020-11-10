import { connect } from "react-redux";

import ProfileHeader from "./ProfileHeader";
import {
  addPostActionCreator,
  upateNewPostActionCreator
} from "../../../redux/profile-reducer";

const mapStatetoProps = state => {
  return {
    profilePage: state.profilePage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    upateNewPostActionCreator: text => {
      let action = upateNewPostActionCreator(text);
      dispatch(action);
    },
    addPostActionCreator: () => {
      dispatch(addPostActionCreator());
    }
  };
};

const ProfileHeaderContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(ProfileHeader);

export default ProfileHeaderContainer;
