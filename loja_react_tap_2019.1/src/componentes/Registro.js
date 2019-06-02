import React , {Component} from 'react';

class Registro extends Component {
    login = () =>{
        this.props.history.push('/');
    } 
    render() {
        return(
            <>     <div class="cadastro">
                        <div class="logo">
                            <img class="logo" src="https://www.ilzas.com.br/img/cadastro.png" width="50%"></img>
                            <h1>Cadastre-se</h1>
                        </div>
                        <form class="logo">
                            <div>
                                <label for="name">Nome: </label>
                                <input type="text" id="name" />
                            </div>
                            <div>
                                <label for="mail">Senha: </label>
                                <input type="email" id="mail" />
                            </div>

                            <div class="button">
                                <button type="submit" onClick={() => this.login()}>Cadastrar</button>
                            </div>
                        </form>
                    </div>
            </>
        );
    }

}

export default Registro;