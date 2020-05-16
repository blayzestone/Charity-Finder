import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
} from 'react-router-dom';

import Header from './components/Header';
import CharityList from './components/CharityList';
import HomeScreen from './components/HomeScreen';
import CharityResults from './components/CharityResults';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/register">
              Register
          </Route>
          <Route path="/results">
              <CharityResults />
          </Route>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
