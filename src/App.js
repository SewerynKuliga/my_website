import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Main/Main"
import FirstGame from './FirstGame/FirstGame';
import "./App.css"


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Main path="/" exact component="Main" />
          <FirstGame path="/FirstGame" exact component="FirstGame" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
