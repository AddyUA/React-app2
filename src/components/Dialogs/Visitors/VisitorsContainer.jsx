import { connect } from "react-redux";
import Visitors from "./Visitors";

const mapStateProps = state => {
  return {
    dialogsPage: state.dialogsPage
  };
};

const VisitorsContainer = connect(mapStateProps)(Visitors);

export default VisitorsContainer;
