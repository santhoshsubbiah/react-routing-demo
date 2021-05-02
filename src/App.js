import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import LeftSideNav from "./components/LeftSideNav";
import SampleContainer from "./components/SampleContainer";
function App() {
  return (
    <Router>
      <div className="main-container">
        <div className="left-side-menu-container child-container">
          <LeftSideNav></LeftSideNav>
        </div>

        <div className="sample-render-container child-container">
          <SampleContainer></SampleContainer>
        </div>
      </div>
    </Router>
  );
}

export default App;
