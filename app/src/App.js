import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/home">
              Hello World
          </Route>
          <Route path="/profile">
              Profile
          </Route>
          <Route path="/register">
              Register
          </Route>
          <Route path="/">
              Login
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
