import React , {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Loja from './Loja';

class Login extends Component {
    loja = () =>{
        this.props.history.push('/');
    } 
    render() {
        return ( 
            <body>
                <form component={Loja}>
                    <div class="imgcontainer">
                        <img width="50%" src="https://www.empreendaecommerce.com.br/wp-content/uploads/2019/02/Empreenda-Ecommerce-logo.png" alt="Avatar" class="avatar"/>
                    </div>
                    <div class="container">
                        <label for="uname"><b>Nome de Usuário</b></label>
                        <input type="text" placeholder="Enter Nome" name="uname" required></input>
                        <label for="psw"><b>Senha</b></label>
                        <input type="password" placeholder="Enter Senha" name="psw" required></input>
                        <button type="submit" onClick={() => this.loja()}>Login</button>
                        <label>
                            <input type="checkbox" name="remember"/> Me deixa conectado
                        </label>
                    </div>
                    <div class="container">
                        <button type="button" class="cancelbtn">Cancelar</button>
                        <span class="psw"><a href="#">Esqueceu a senha?</a></span>
                    </div>
                </form>
            </body>
        );
    }

}

export default Login;