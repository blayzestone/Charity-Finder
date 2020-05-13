import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
} from 'react-router-dom';

import CharityList from './components/CharityList';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/home">
              <CharityList />
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
