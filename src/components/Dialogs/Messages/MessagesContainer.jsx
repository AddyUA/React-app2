import { connect } from "react-redux";
import Messages from "./Messages";

const mapStateProps = state => {
  return {
    dialogsPage: state.dialogsPage
  };
};

const MessagesContainer = connect(mapStateProps)(Messages);

export default MessagesContainer;
