import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile/Profile";

function App(props) {
  // debugger;
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper__content">
        <Switch>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route path="/dialogs">
            <Dialogs />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
