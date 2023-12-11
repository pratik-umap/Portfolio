import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Skill from "./Components/Skill";
import ProjectAll from "./Components/ProjectAll";
import Contact from "./Components/Contact";
import Personal from "./Components/PersonalInfo";
import Header from "./Components/Header";

function App() {
  return (
    <Router >
      <div className="app">
        <Header />
        <Switch>
          <Route path="/personal">
            <Personal />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/project">
            <ProjectAll />
          </Route>

          <Route path="/skill">
            <Skill />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
