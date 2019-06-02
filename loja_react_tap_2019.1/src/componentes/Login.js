import React , {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Loja from './Loja';

class Login extends Component {
    loja = () =>{
        this.props.history.push('/');
    } 
    render() {
        return ( 
            <body class="login">
                <form component={Loja}>
                    <div>
                        <img class="logo" width="50%" src="https://www.ficaon.com/wp-content/uploads/2018/04/geradores-de-logo.png"/>
                    </div>
                    <div class="dados">
                        <label for="uname"><b>Nome de Usuário</b></label>
                        <input type="text" placeholder="Nome" name="uname" required></input>
                        <label for="psw"><b>Senha</b></label>
                        <input type="password" placeholder="Senha" name="psw" required></input>
                        <button class="botao" type="submit" onClick={() => this.loja()}>Login</button>
                        <label>
                            <input type="checkbox" name="remember"/> Me deixa conectado
                        </label>
                        <a href="#">Esqueceu a senha?</a>
                    </div>
                </form>
            </body>
        );
    }

}

export default Login;