import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.scss';

import Items from './components/Items';
import ItemPage from './components/ItemPage';
import AddItem from './components/AddItem';

import State from './context/State';

const App = () => {
  
  return (
    <Router>
      <>
      React App running...
      <hr />
      <Switch>
        <Route exact path='/' component={Items} />
        <Route exact path='/item/:id' component={ItemPage} />
      </Switch>
      <AddItem />
      </>
    </Router>
  )
};

const StateContainer = () => {
  return (
    <State>
      <App />
    </State>
  )
}

ReactDOM.render(<StateContainer />, document.getElementById('root'));