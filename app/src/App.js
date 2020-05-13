import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
} from 'react-router-dom';

import Header from './components/Header';
import CharityList from './components/CharityList';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/home">
              <Header />
              <CharityList />
          </Route>
          <Route path="/profile">
              <Header />
              Profile
          </Route>
          <Route path="/search">
              <Header />
              Search
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
