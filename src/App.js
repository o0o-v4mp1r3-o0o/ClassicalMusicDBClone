import "./App.css";
import Body from "./Body";
import Header from "./Header";
import Intro from "./Intro";
import TaskBar from "./TaskBar";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Test from "./Test";
import Contribute from "./NewPage/Contribute";
import Login from "./NewPage/Login";
import Register from "./NewPage/Register";

function App() {
  return (
    <Router>
      <div className="app">
        <Route exact path="/" component={Header} />
        <Route exact path="/" component={TaskBar} />
        <Route exact path="/" component={Intro} />
        <Route exact path="/" component={Body} />
        <Route exact path="/composers" component={Test} />
        <Route exact path="/contribute" component={Contribute} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </div>
    </Router>
  );
}

export default App;
