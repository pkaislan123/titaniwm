import React from 'react'
import './styles/bulma.scss';
import './styles/global.scss';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import api from './services/api';
import Cookies from 'js-cookie';

import Home from './pages/home';
import GestaoDeContratos from './pages/GestaoDeContratos';

import Contato from './pages/Contato';


import Verifyforzoho from './pages/zohoverify';

import Blog from './pages/Blog';
import VizualizarNoticia from './pages/VizualizarNoticia';




import Login from './pages/Login';
import ContaAdmin from './pages/painelAdmin/MinhaConta';
import ContaCliente from './pages/painelCliente/Minha Conta';

import MinhasNoticias from './pages/painelAdmin/MinhasNoticias';
import CadastroNoticia from './pages/painelAdmin/CadastroNoticia';
import AlterarNoticia from './pages/painelAdmin/AlterarNoticia';


function regra() {
 
  return Cookies.get('regra');;


};


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


const PrivateAdminArmazemAutorizationRoute = ({component: Component, ...rest}) => {
  return (

      // Show the component only when the user is logged in
      // Otherwise, redirect the user to /signin page
      <Route {...rest} render={props => (
       (isAuthenticated() && (regra() === "ROLE_ADMIN" || regra() === "ROLE_CLIENTE")) ?
              <Component {...props} />
          : <Redirect to="/minhaconta" />
      )} />
  );
};





const renderConta = () =>{
  let rule = regra();
   console.log("regra na funcao render: " + rule);
 
   if( isAuthenticated()  && rule === "ROLE_ADMIN" ){
      return <ContaAdmin  />
  }else if(isAuthenticated()  && rule === "ROLE_CLIENTE"){
   return <ContaCliente />
  }else{
   return <Login />
 
  }
 }

 const ContaRoute = ({...rest}) => {
  return (

      // Show the component only when the user is logged in
      // Otherwise, redirect the user to /signin page
      <Route {...rest} render={props => (
        renderConta() 
      )} />
  );
};


function App() {


  return (

    <BrowserRouter>

      <Switch>
      <PublicRoute restricted={false} component={Home} path="/" exact />
      <PublicRoute restricted={false} component={GestaoDeContratos} path="/gestaodecontratos" exact />

      <PublicRoute restricted={false} component={Blog} path="/noticias/:categoria" exact />
      <PublicRoute restricted={false} component={Blog} path="/noticias/" exact />
      <PublicRoute restricted={false} component={VizualizarNoticia} path="/noticias/:dia/:mes/:ano/:titulo/:idNoticia" exact />
      
      <PublicRoute restricted={false} component={Contato} path="/contato/" exact />


      <PublicRoute restricted={false} component={Verifyforzoho} path="/zohoverify/verifyforzoho.html" exact />

      <PublicRoute restricted={true} component={Login} path="/login" exact />
      <ContaRoute path="/minhaconta" exact />

      <PrivateAdminArmazemAutorizationRoute component={MinhasNoticias} path="/minhasnoticias/" exact />     
      <PrivateAdminArmazemAutorizationRoute component={CadastroNoticia} path="/cadastrarnoticia/" exact />     
      <PrivateAdminArmazemAutorizationRoute component={AlterarNoticia} path="/alterarnoticia/:idNoticia" exact />     


      </Switch>

    </BrowserRouter>

  );
}

export default App;
