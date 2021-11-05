import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Main/Main"
import Game from './Game/Game';
import MainViev from "./Project_MovieSuggestion/MainViev/MainViev";
import "./App.css"


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/Game" exact component={Game} />
          <Route path='/Project-Movies-Suggestion' exact component={MainViev} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
