import React, { Component } from 'react';
import {LojaContext} from '../context/LojaContext';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Badge from 'react-bootstrap/Badge';
import {withRouter} from 'react-router-dom';

class BarraDeBusca extends Component {  
  login = () =>{
    this.props.history.push('/login');
  } 
  registro = () =>{
    this.props.history.push('/registro');
  } 
  render() {
    return (
      <Navbar bg="light" fixed="top" background-color="#004085">
        <Navbar.Brand>Loja São Longuinho</Navbar.Brand>
        <Nav>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <React.Fragment>
              <Form inline>
                <FormControl type="text" placeholder="Procurar" className="mr-sm-2" 
                  onChange={(event) => this.context.buscar(event.target.value)} />
              </Form>
              { (this.context.state.carrinho.length <= 0) ? '' : (
                <Button variant="primary" onClick={this.context.mostrarCarrinho}>
                  🛒 <Badge variant="light">{this.context.state.carrinho.length}</Badge>
                </Button>
              ) }
            </React.Fragment>
          </Navbar.Collapse>
        </Nav>
        <a><button onClick={() => this.login()}>Login</button></a>
        <a><button onClick={() => this.registro()}>Registrar-se</button></a>
        <a href="https://tawk.to/chat/5ce038b2d07d7e0c63944041/default"><button>Chat-Online</button></a>
      </Navbar>
    );
  }
}

BarraDeBusca.contextType = LojaContext;

export default withRouter(BarraDeBusca);