
import Home from './Home'
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import About from './About';
import Rightside from './Rightside';
import Skill from './Skill';
import ProjectAll from './ProjectAll';
import Contact from './Contact';
import Personal from './PersonalInfo';

function App() {
  return (
    <Router basename='/Portfolio'>
    <div className="app">
      <Switch>
      
      <Route path="/personal">
        <Home />
        <Personal />
        
      </Route>
      <Route path="/contact">
         <Home />
         <Contact />
      </Route>

      <Route path="/project">
         <Home />
         <ProjectAll />
      </Route>

      <Route path="/skill">
         <Home />
         <Skill />
      </Route>

      <Route path="/about">
         <Home />
         <About />
      </Route>

     <Route path="/">
       <Home />
       <Rightside />
       <About />
       <Skill />
       <ProjectAll />
       <Contact />
     </Route>
    
      </Switch>
    </div>
    </Router>
  );
}

export default App;
