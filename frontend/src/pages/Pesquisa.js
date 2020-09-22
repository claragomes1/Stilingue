import React, { Component } from 'react';
import api from '../services/api';
import Mapa from '../components/Mapa';
import socket from 'socket.io-client';
import './Pesquisa.css';

export default class Pesquisa extends Component {

    state = {
        info_palavras: [],
        palavra: "",
    };

    async componentDidMount() {//Executado automaticamente quando a pagina é exibida em tela
        this.subscribeToEvents();

        /* const {_id} = this.state.info_palavras;
           const response = await api.get(`/${_id}`);
           this.setState({ info_palavras: response.data });//dentro do data vai estar o array com os tweets*/
    }



    subscribeToEvents = () => {
        const io = socket('http://localhost:3333');
        io.on('search', data => {
            this.setState({ info_palavras: [data] })
        })
    }



    handleNewSearch = async e => {
        if (e.keyCode !== 13) return;
        const palavra = this.state.palavra;
        const response = await api.post("/", { palavra })
        const response1 = await api.get(`/${response.data._id}`);
        this.setState({ info_palavras: response1.data });
        this.setState({ palavra: "" });
        console.log(response.data)
        
    }


    handleInputChange = (e) => {
        this.setState({ palavra: e.target.value });
    }



    //render();

    render() {
       //const { info_palavras } = this.state;
        if (this.state.info_palavras.length !== 0) {
            return (
                
                <div className="tela">
                    <nav className="border">
                        <div className="nav-wrapper">
                            <form >
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
                    
                    <Mapa key={this.state.info_palavras._id} info_palavras={this.state.info_palavras} />

                </div>
            );
        } else {
            return (
                <div className="tela">
                    <nav className="border">
                        <div className="nav-wrapper">
                            <form >
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
                    
                </div>
            );

        }
    }
}