import React from 'react'
import './styles/bulma.scss';
import './styles/global.scss';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './pages/home';
import GestaoDeContratos from './pages/GestaoDeContratos';
import GestaoDeFinancas from './pages/GestaoDeFinancas';
import GestaoDeRH from './pages/GestaoDeRH';

import Cookies from 'js-cookie';
import api from './services/api';

function isAuthenticated() {
  var token = Cookies.get('token');
  console.log(typeof token)
  if (token === null || token === undefined || token === "undefined") {
    // This means that there's no JWT and no user is logged in.
    api.defaults.headers.common.Authorization = null;
    console.log("token invalido: ");
    return false;
  } else {
    // This means that there's a JWT so someone must be logged in.
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    console.log("token valido: " + token);
    return true;

  }
};












const PublicRoute = ({component: Component, restricted, ...rest}) => {
  return (
      // restricted = false meaning public route
      // restricted = true meaning restricted route
      <Route {...rest} render={props => (
        isAuthenticated() && restricted ?
              <Redirect to="/minhaconta" />
          : <Component {...props} />
      )} />
  );
};








function App() {


  return (

    <BrowserRouter>

      <Switch>
      <PublicRoute restricted={false} component={Home} path="/" exact />
      <PublicRoute restricted={false} component={GestaoDeContratos} path="/gestaodecontratos" exact />
      <PublicRoute restricted={false} component={GestaoDeFinancas} path="/gestaodefinancas" exact />
      <PublicRoute restricted={false} component={GestaoDeRH} path="/gestaoderh" exact />


      </Switch>

    </BrowserRouter>

  );
}

export default App;
