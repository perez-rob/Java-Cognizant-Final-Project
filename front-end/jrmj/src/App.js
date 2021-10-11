import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Explore from './pages/Explore';

function App() {
  return (
    <Router>
    <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
    </Switch>
    </Router>
  );
}

export default App;
