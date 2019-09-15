import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './Routes/PrivateRoute';
import Header from './Components/Header/Header';
import LoginPage from './Pages/LoginPage/LoginPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import ReviewListPage from './Pages/ReviewListPage/ReviewListPage';

const AppRouter = props => (
  <HashRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <PrivateRoute exact path="/profile" component={ProfilePage} />
      <PrivateRoute exact path="/topic/:id/review" component={ReviewListPage} />
    </Switch>
  </HashRouter>
);

export default AppRouter;