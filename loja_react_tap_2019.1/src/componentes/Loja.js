import React, { Component } from 'react';
import {LojaProvider} from '../context/LojaContext';
import BarraDeBusca from './BarraDeBusca';
import ListaDeProdutos from './ListaDeProdutos';
import CarrinhoDeCompras from './CarrinhoDeCompras';

class Loja extends Component {
  render() {
    return (
      <>
        <LojaProvider>
          <BarraDeBusca/>
          <CarrinhoDeCompras/>
          <ListaDeProdutos/>
        </LojaProvider>
      </>
    );
  }
}

export default Loja;