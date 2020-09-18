import React, {Component} from 'react';
import api from '../services/api';

import './Pesquisa.css';

export default class Pesquisa extends Component {

    state = {
        palavra: ""
    };

    handleNewSearch = async e => {
        if(e.keyCode !== 13) return;

        const palavra = this.state.palavra;

        await api.post("/", { palavra })
        console.log(palavra);

        this.setState({ palavra: ""});
    }

   /* handleSubmit = e => {
        e.preventDefault();
        const {palavra} = this.state;
        if(!palavra.length) return;

        //localStorage.setItem('@searchPalavra:palavra', palavra);

        //this.props.history.push('/search');
    }
*/
    handleInputChange = (e) => {
        this.setState({ palavra: e.target.value});
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <form>
                        <div className="input-field">
                        <input 
                            id="search"
                            type="search" 
                            required
                            value={this.state.palavra}
                            onChange={this.handleInputChange}
                            onKeyDown={this.handleNewSearch}   
                            placeholder="Digite uma palavra" 
                        />
                        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                        </div>
                    </form>
                </div>
            </nav>
        );
    }
}