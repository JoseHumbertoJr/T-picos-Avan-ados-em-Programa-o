import React, { Component } from 'react';
import BancoDeDados from '../bd/BancoDeDados';

class DetalheProduto extends Component{
    render(){
        let{id} = this.props.match.params;
        let produto = BancoDeDados.getProduto(id);
        
        return(
            <>
            <h1>Detalhe do Produto</h1>
            <img width="25%" src={produto.imagem}></img>
            <h5>Produto: {produto.nome}.</h5>
            <h5>Preço: {produto.preco} R$</h5>
            </>
        );
    }
}

export default DetalheProduto;