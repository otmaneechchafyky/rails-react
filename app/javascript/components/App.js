// app/javascript/components/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Greeting from './Greeting';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/greeting" component={Greeting} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;