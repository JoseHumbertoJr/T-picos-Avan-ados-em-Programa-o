import React, { Component } from 'react';
import {LojaProvider} from '../context/LojaContext';
import BarraDeBusca from './BarraDeBusca';
import ListaDeProdutos from './ListaDeProdutos';
import CarrinhoDeCompras from './CarrinhoDeCompras';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Registro from './Registro';
import Login from './Login';
import Loja from './Loja';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Loja} />
            <Route path="/registro" exact component={Registro} />
            <Route path="/login" exact component={Login} />
            <Route path="/detalhe"/>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;