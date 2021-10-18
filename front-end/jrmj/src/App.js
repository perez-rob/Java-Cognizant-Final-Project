import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Explore from './pages/Explore';
import Cart from './pages/Cart';
import UserProfile from './pages/UserProfile';
import ConsumerProvider from './utils/ConsumerContext';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import ScrollToTop from './utils/ScrollToTop';


const stripePromise = loadStripe('pk_test_51JjhRnLiea7p0n0HUnks0w0ZwHFJC3jHH6wKqSw13QHcwO5QRvi7bQoB7FZIeWdkBI3qUoqC0vtHe8wAXI4Yq5BG00ZLAjHxJe');


function App() {
  return (
    <ConsumerProvider>
      <Router>
      <ScrollToTop />
      <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/profile">
              <UserProfile />
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
    </ConsumerProvider>
  );
}

export default App;
