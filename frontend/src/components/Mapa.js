import React, { Component } from 'react';
import './Mapa.css';

import CytoscapeComponent from 'react-cytoscapejs'
import Cytoscape from 'cytoscape';
import COSEBilkent from 'cytoscape-cose-bilkent';

Cytoscape.use(COSEBilkent);

export default class Info extends Component {
''
    state = {
        w: 0,
        h: 0,
        // elements: 
    }

    componentDidMount = () => {
        this.setState({
            w: window.innerWidth ,
            h: window.innerHeight 
        })
        this.setUpListeners()
    }

    setUpListeners = () => {
        this.cy.on('click', 'node', (event) => {
            console.log(event.target)
        })
    }

    render() {
        const { info_palavras } = this.props;
        console.log(info_palavras)
       // const palavra = info_palavras[0].palavra;
       // console.log(palavra)
        const layout = { name: 'cose-bilkent' };
        return (

            <div>
                <CytoscapeComponent
                    id="myCy"
                    elements={[
                        { data: { id: 'palavra', label: info_palavras[0].palavra }, position: { x: 100, y: 0 } },
                        { data: { id: 'contexto', label: info_palavras[0].contexto }, posição: { x: 100, y: 0 } },
                        { data: { id: 'contexto2', label: info_palavras[0].contexto2 }, position: { x: 100, y: 0 } },
                        { data: { id: 'contexto3', label: info_palavras[0].contexto3 }, posição: { x: 100, y: 0 } },
                        { data: { id: 'sinonimo', label: info_palavras[0].sinonimo }, position: { x: 100, y: 0 } },
                        { data: { id: 'sinonimo2', label: info_palavras[0].sinonimo2 }, posição: { x: 100, y: 0 } },
                        { data: { id: 'sub1_c1', label: info_palavras[0].sub1_c1 }, position: { x: 100, y: 0 } },
                        { data: { id: 'sub2_c1', label: info_palavras[0].sub2_c1 }, posição: { x: 100, y: 0 } },
                        { data: { id: 'sub1_c2', label: info_palavras[0].sub1_c2 }, position: { x: 100, y: 0 } },
                        { data: { id: 'sub2_c2', label: info_palavras[0].sub2_c2 }, posição: { x: 100, y: 0 } },
                        { data: { id: 'sub1_c3', label: info_palavras[0].sub1_c3 }, position: { x: 100, y: 0 } },
                        { data: { id: 'sub2_c3', label: info_palavras[0].sub2_c3 }, posição: { x: 100, y: 0 } },
                        { data: { id: 'verbo1_c1', label: info_palavras[0].verbo1_c1 }, position: { x: 100, y: 0 } },
                        { data: { id: 'verbo2_c1', label: info_palavras[0].verbo2_c1 }, posição: { x: 100, y: 0 } },
                        { data: { id: 'verbo1_c2', label: info_palavras[0].verbo1_c2 }, position: { x: 100, y: 0 } },
                        { data: { id: 'verbo2_c2', label: info_palavras[0].verbo2_c2 }, posição: { x: 100, y: 0 } },
                        { data: { id: 'verbo1_c3', label: info_palavras[0].verbo1_c3 }, position: { x: 100, y: 0 } },
                        { data: { id: 'verbo2_c3', label: info_palavras[0].verbo2_c3 }, posição: { x: 100, y: 0 } },
                        { data: { id: 'adj1_c1', label: info_palavras[0].adj1_c1 }, position: { x: 100, y: 0 } },
                        { data: { id: 'adj2_c1', label: info_palavras[0].adj2_c1 }, posição: { x: 100, y: 0 } },
                        { data: { id: 'adj1_c2', label: info_palavras[0].adj1_c2 }, position: { x: 100, y: 0 } },
                        { data: { id: 'adj2_c2', label: info_palavras[0].adj2_c2 }, posição: { x: 100, y: 0 } },
                        { data: { id: 'adj1_c3', label: info_palavras[0].adj1_c3 }, position: { x: 100, y: 0 } },
                        { data: { id: 'adj2_c3', label: info_palavras[0].adj2_c3 }, posição: { x: 100, y: 0 } },
                        { data: { id: 'adv1_c1', label: info_palavras[0].adv1_c1 }, position: { x: 100, y: 0 } },
                        { data: { id: 'adv2_c1', label: info_palavras[0].adv2_c1 }, posição: { x: 100, y: 0 } },
                        { data: { id: 'adv1_c2', label: info_palavras[0].adv1_c2 }, position: { x: 100, y: 0 } },
                        { data: { id: 'adv2_c2', label: info_palavras[0].adv2_c2 }, posição: { x: 100, y: 0 } },
                        { data: { id: 'adv1_c3', label: info_palavras[0].adv1_c3 }, position: { x: 100, y: 0 } },
                        { data: { id: 'adv2_c3', label: info_palavras[0].adv2_c3 }, posição: { x: 100, y: 0 } },

                        { data: { source: 'palavra', target: 'contexto', label: 'Contexto 1' } },
                        { data: { source: 'palavra', target: 'contexto2', label: 'Contexto 2' } },
                        { data: { source: 'palavra', target: 'contexto3', label: 'Contexto 3' } },

                        { data: { source: 'contexto', target: 'sinonimo', label: 'Sinonimo 1' } },
                        { data: { source: 'contexto', target: 'sinonimo2', label: 'Sinonimo 2' } },//Sinonimo é em palavra
                        { data: { source: 'contexto', target: 'sub1_c1', label: 'Substantivo contexto 1' } },
                        { data: { source: 'contexto', target: 'sub2_c1', label: 'Substantivo contexto 1' } },
                        { data: { source: 'contexto', target: 'verbo1_c1', label: 'Substantivo contexto 1' } },
                        { data: { source: 'contexto', target: 'verbo2_c1', label: 'Substantivo contexto 1' } },
                        { data: { source: 'contexto', target: 'adj1_c1', label: 'Substantivo contexto 1' } },
                        { data: { source: 'contexto', target: 'adj2_c1', label: 'Substantivo contexto 1' } },
                        { data: { source: 'contexto', target: 'adv1_c1', label: 'Substantivo contexto 1' } },
                        { data: { source: 'contexto', target: 'adv2_c1', label: 'Substantivo contexto 1' } },

                        
                        { data: { source: 'contexto2', target: 'sub1_c2', label: 'Substantivo contexto 2' } },
                        { data: { source: 'contexto2', target: 'sub2_c2', label: 'Substantivo contexto 2' } },
                        { data: { source: 'contexto2', target: 'verbo1_c2', label: 'Substantivo contexto 2' } },
                        { data: { source: 'contexto2', target: 'verbo2_c2', label: 'Substantivo contexto 2' } },
                        { data: { source: 'contexto2', target: 'adj1_c2', label: 'Substantivo contexto 2' } },
                        { data: { source: 'contexto2', target: 'adj2_c2', label: 'Substantivo contexto 2' } },
                        { data: { source: 'contexto2', target: 'adv1_c2', label: 'Substantivo contexto 2' } },
                        { data: { source: 'contexto2', target: 'adv2_c2', label: 'Substantivo contexto 2' } },

                        { data: { source: 'contexto3', target: 'sub1_c3', label: 'Substantivo contexto 3' } },
                        { data: { source: 'contexto3', target: 'sub2_c3', label: 'Substantivo contexto 3' } },
                        { data: { source: 'contexto3', target: 'verbo1_c3', label: 'Substantivo contexto 3' } },
                        { data: { source: 'contexto3', target: 'verbo2_c3', label: 'Substantivo contexto 3' } },
                        { data: { source: 'contexto3', target: 'adj1_c3', label: 'Substantivo contexto 3' } },
                        { data: { source: 'contexto3', target: 'adj2_c3', label: 'Substantivo contexto 3' } },
                        { data: { source: 'contexto3', target: 'adv1_c3', label: 'Substantivo contexto 3' } },
                        { data: { source: 'contexto3', target: 'adv2_c3', label: 'Substantivo contexto 3' } },

                    ]

                    }
                    style={{ 
                        width: this.state.w,
                        height: this.state.h                         
                    }}
                    cy={(cy) => { this.cy = cy }}
                    layout={layout}
                    pan={ {x: 620, y: 100 }}
                    zoom={1}
                    minZoom={0.8}
                    maxZoom={1.3}

                />
            </div>
        )
    }
}