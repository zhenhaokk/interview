import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Form from './components/Form/Form';


const App = () => (
  <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/form" component={Form} />
      </Switch>
    </Container>
  </BrowserRouter>
)

export default App