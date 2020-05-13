import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
} from 'react-router-dom';

import Header from './components/Header';
import CharityList from './components/CharityList';
import HomeScreen from './components/HomeScreen';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/profile">
              <Header />
              Profile
          </Route>
          <Route path="/register">
              Register
          </Route>
          <Route path="/results">
              <Header />
              <CharityList />
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
