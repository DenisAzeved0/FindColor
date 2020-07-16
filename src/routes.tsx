import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Button from './pages/Button';

const Routes = () =>
{
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact/>
      <Route component={Button} path="/button" />
    </BrowserRouter>
  )
}

export default Routes;