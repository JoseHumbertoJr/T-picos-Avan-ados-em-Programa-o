import React , {Component} from 'react';

class Registro extends Component {
    login = () =>{
        this.props.history.push('/');
    } 
    render() {
        return(
            <>      <img src="https://www.ilzas.com.br/img/cadastro.png" width="25%"></img>
                    <form>
                        <div display="flex;">
                            <label for="name">Nome:</label>
                            <input type="text" id="name" />
                        </div>
                        <div>
                            <label for="mail">Senha:</label>
                            <input type="email" id="mail" />
                        </div>

                        <div class="button">
                            <button type="submit" onClick={() => this.login()}>Cadastrar</button>
                        </div>
                    </form>
            </>
        );
    }

}

export default Registro;