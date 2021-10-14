import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Explore from './pages/Explore';
import Cart from './pages/Cart';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51JjhRnLiea7p0n0HUnks0w0ZwHFJC3jHH6wKqSw13QHcwO5QRvi7bQoB7FZIeWdkBI3qUoqC0vtHe8wAXI4Yq5BG00ZLAjHxJe');

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
          <Elements stripe={stripePromise}>
          <Route path="/cart">
            <Cart />
          </Route>
          </Elements>
    </Switch>
    </Router>
 
  );
}

export default App;
