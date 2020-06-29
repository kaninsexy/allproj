import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Work2 from './pages/work2/work2.component';
import Work3 from './pages/work3/work3.component';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route component={HomePage} path='/' exact></Route>
          <Route component={Work2} path='/work2' exact></Route>
          <Route component={Work3} path='/work3' exact></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
