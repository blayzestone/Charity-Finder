import React from 'react';
import { connect } from 'react-redux';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
} from 'react-router-dom';

import Header from './components/Header';
import CharityList from './components/CharityList';
import HomeScreen from './components/HomeScreen';

function App({charities, userCharities}) {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/profile">
              <Header />
              <CharityList charities={userCharities} />
          </Route>
          <Route path="/register">
              Register
          </Route>
          <Route path="/results">
              <Header />
              <CharityList charities={charities} />
          </Route>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    charities: state.charity.charities,
    userCharities: state.users.user.charities,
  }
}

export default connect(mapStateToProps, {})(App);
