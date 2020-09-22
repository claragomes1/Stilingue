import React, { Component } from 'react';
import './Mapa.css';

import CytoscapeComponent from 'react-cytoscapejs'
/*import Cytoscape from 'cytoscape';
import COSEBilkent from 'cytoscape-cose-bilkent';*/

import cytoscape from 'cytoscape';
import cola from 'cytoscape-cola';

cytoscape.use( cola );


//Cytoscape.use(COSEBilkent);

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
            h: window.innerHeight - 150 
        })
        this.setUpListeners()
    }

    setUpListeners = () => {
        this.cy.on('click', 'node', (event) => {
            console.log(event.target)
        })
    }

    remove = () => {
        var j = this.cy.$('node[selected=true]')
        this.cy.remove(j)
        console.log()
    }


    render() {
        const { info_palavras } = this.props;
        console.log(info_palavras)
       // const palavra = info_palavras[0].palavra;
       // console.log(palavra)
        const layout = { name: 'cola' };
        return (

            <div>
                <CytoscapeComponent
                    id="myCy"
                    elements={[
                        { data: { id: 'palavra', label: info_palavras[0].palavra, selected: true},   selected: true, position: { x: 100, y: 0 } },
                        { data: { id: 'contexto', label: info_palavras[0].contexto , selected: true}, selected: true, position: { x: 100, y: 0 } },
                        { data: { id: 'contexto2', label: info_palavras[0].contexto2 , selected: true}, selected: true, position: { x: 100, y: 0 } },
                        { data: { id: 'contexto3', label: info_palavras[0].contexto3 , selected: true},selected: true, position:  { x: 100, y: 0 } },
                        { data: { id: 'contexto4', label: info_palavras[0].contexto4 , selected: true}, selected: true, position: { x: 100, y: 0 } },
                        { data: { id: 'contexto5', label: info_palavras[0].contexto5 , selected: true},  selected: true, position: { x: 100, y: 0 } },
                        { data: { id: 'contexto6', label: info_palavras[0].contexto6 , selected: true},  selected: true, position:  { x: 100, y: 0 } },
                        { data: { id: 'contexto7', label: info_palavras[0].contexto7, selected: true},  selected: true, position: { x: 100, y: 0 } },
                        { data: { id: 'contexto8', label: info_palavras[0].contexto8 , selected: true},  selected: true, position: { x: 100, y: 0 } },
                        { data: { id: 'contexto9', label: info_palavras[0].contexto9 , selected: true}, selected: true, position:  { x: 100, y: 0 } },

                        { data: { id: 'sinonimo', label: "Sinonimo", selected: true}, selected:true, position: { x: 100, y: 0 } },
                        { data: { id: 'sinonimo1', label: info_palavras[0].sinonimo }, position: { x: 100, y: 0 } },
                        { data: { id: 'sinonimo2', label: info_palavras[0].sinonimo2 }, position:  { x: 100, y: 0 } },

                        { data: { id: 'sub1_c1', label: info_palavras[0].sub1_c1 }, position: { x: 100, y: 0 } },
                        { data: { id: 'sub2_c1', label: info_palavras[0].sub2_c1 }, position:  { x: 100, y: 0 } },
                        { data: { id: 'sub1_c2', label: info_palavras[0].sub1_c2 }, position: { x: 100, y: 0 } },
                        { data: { id: 'sub2_c2', label: info_palavras[0].sub2_c2 }, position:  { x: 100, y: 0 } },
                        { data: { id: 'sub1_c3', label: info_palavras[0].sub1_c3 }, position: { x: 100, y: 0 } },
                        { data: { id: 'sub2_c3', label: info_palavras[0].sub2_c3 }, position:  { x: 100, y: 0 } },
                        { data: { id: 'sub1_c4', label: info_palavras[0].sub1_c4 }, position: { x: 100, y: 0 } },
                        { data: { id: 'sub2_c4', label: info_palavras[0].sub2_c4 }, position:  { x: 100, y: 0 } },
                        { data: { id: 'sub1_c5', label: info_palavras[0].sub1_c5 }, position: { x: 100, y: 0 } },
                        { data: { id: 'sub2_c5', label: info_palavras[0].sub2_c5 }, position:  { x: 100, y: 0 } },
                        { data: { id: 'sub1_c6', label: info_palavras[0].sub1_c6 }, position: { x: 100, y: 0 } },
                        { data: { id: 'sub2_c6', label: info_palavras[0].sub2_c6 }, position:  { x: 100, y: 0 } },
                        { data: { id: 'sub1_c7', label: info_palavras[0].sub1_c7 }, position: { x: 100, y: 0 } },
                        { data: { id: 'sub2_c7', label: info_palavras[0].sub2_c7 }, position:  { x: 100, y: 0 } },
                        { data: { id: 'sub1_c8', label: info_palavras[0].sub1_c8 }, position: { x: 100, y: 0 } },
                        { data: { id: 'sub2_c8', label: info_palavras[0].sub2_c8 }, position:  { x: 100, y: 0 } },
                        { data: { id: 'sub1_c9', label: info_palavras[0].sub1_c9 }, position: { x: 100, y: 0 } },
                        { data: { id: 'sub2_c9', label: info_palavras[0].sub2_c9 }, position:  { x: 100, y: 0 } },

                        { data: { id: 'verbo1_c1', label: info_palavras[0].verbo1_c1 }, position: { x: 100, y: 0 } },
                        { data: { id: 'verbo2_c1', label: info_palavras[0].verbo2_c1 }, position:  { x: 100, y: 0 } },
                        { data: { id: 'verbo1_c2', label: info_palavras[0].verbo1_c2 }, position: { x: 100, y: 0 } },
                        { data: { id: 'verbo2_c2', label: info_palavras[0].verbo2_c2 }, position:  { x: 100, y: 0 } },
                        { data: { id: 'verbo1_c3', label: info_palavras[0].verbo1_c3 }, position: { x: 100, y: 0 } },
                        { data: { id: 'verbo2_c3', label: info_palavras[0].verbo2_c3 }, position:  { x: 100, y: 0 } },
                        { data: { id: 'verbo1_c4', label: info_palavras[0].verbo1_c1 }, position: { x: 100, y: 0 } },
                        { data: { id: 'verbo2_c4', label: info_palavras[0].verbo2_c1 }, position:  { x: 100, y: 0 } },
                        { data: { id: 'verbo1_c5', label: info_palavras[0].verbo1_c2 }, position: { x: 100, y: 0 } },
                        { data: { id: 'verbo2_c5', label: info_palavras[0].verbo2_c2 }, position:  { x: 100, y: 0 } },
                        { data: { id: 'verbo1_c6', label: info_palavras[0].verbo1_c3 }, position: { x: 100, y: 0 } },
                        { data: { id: 'verbo2_c6', label: info_palavras[0].verbo2_c3 }, position:  { x: 100, y: 0 } },
                        { data: { id: 'verbo1_c7', label: info_palavras[0].verbo1_c1 }, position: { x: 100, y: 0 } },
                        { data: { id: 'verbo2_c7', label: info_palavras[0].verbo2_c1 }, position:  { x: 100, y: 0 } },
                        { data: { id: 'verbo1_c8', label: info_palavras[0].verbo1_c2 }, position: { x: 100, y: 0 } },
                        { data: { id: 'verbo2_c8', label: info_palavras[0].verbo2_c2 }, position:  { x: 100, y: 0 } },
                        { data: { id: 'verbo1_c9', label: info_palavras[0].verbo1_c3 }, position: { x: 100, y: 0 } },
                        { data: { id: 'verbo2_c9', label: info_palavras[0].verbo2_c3 }, position:  { x: 100, y: 0 } },



                        { data: { id: 'adj1_c1', label: info_palavras[0].adj1_c1 }, position: { x: 100, y: 0 } },
                        { data: { id: 'adj2_c1', label: info_palavras[0].adj2_c1 }, position:  { x: 100, y: 0 } },
                        { data: { id: 'adj1_c2', label: info_palavras[0].adj1_c2 }, position: { x: 100, y: 0 } },
                        { data: { id: 'adj2_c2', label: info_palavras[0].adj2_c2 }, position:  { x: 100, y: 0 } },
                        { data: { id: 'adj1_c3', label: info_palavras[0].adj1_c3 }, position: { x: 100, y: 0 } },
                        { data: { id: 'adj2_c3', label: info_palavras[0].adj2_c3 }, position:  { x: 100, y: 0 } },
                        { data: { id: 'adj1_c4', label: info_palavras[0].adj1_c1 }, position: { x: 100, y: 0 } },
                        { data: { id: 'adj2_c4', label: info_palavras[0].adj2_c1 }, position:  { x: 100, y: 0 } },
                        { data: { id: 'adj1_c5', label: info_palavras[0].adj1_c2 }, position: { x: 100, y: 0 } },
                        { data: { id: 'adj2_c5', label: info_palavras[0].adj2_c2 }, position:  { x: 100, y: 0 } },
                        { data: { id: 'adj1_c6', label: info_palavras[0].adj1_c3 }, position: { x: 100, y: 0 } },
                        { data: { id: 'adj2_c6', label: info_palavras[0].adj2_c3 }, position:  { x: 100, y: 0 } },
                        { data: { id: 'adj1_c7', label: info_palavras[0].adj1_c1 }, position: { x: 100, y: 0 } },
                        { data: { id: 'adj2_c7', label: info_palavras[0].adj2_c1 }, position:  { x: 100, y: 0 } },
                        { data: { id: 'adj1_c8', label: info_palavras[0].adj1_c2 }, position: { x: 100, y: 0 } },
                        { data: { id: 'adj2_c8', label: info_palavras[0].adj2_c2 }, position:  { x: 100, y: 0 } },
                        { data: { id: 'adj1_c9', label: info_palavras[0].adj1_c3 }, position: { x: 100, y: 0 } },
                        { data: { id: 'adj2_c9', label: info_palavras[0].adj2_c3 }, position:  { x: 100, y: 0 } },
            

                        { data: { source: 'palavra', target: 'contexto', label: 'Contexto 1' } },
                        { data: { source: 'palavra', target: 'contexto2', label: 'Contexto 2' } },
                        { data: { source: 'palavra', target: 'contexto3', label: 'Contexto 3' } },
                        { data: { source: 'palavra', target: 'contexto4', label: 'Contexto 4' } },
                        { data: { source: 'palavra', target: 'contexto5', label: 'Contexto 5' } },
                        { data: { source: 'palavra', target: 'contexto6', label: 'Contexto 6' } },
                        { data: { source: 'palavra', target: 'contexto7', label: 'Contexto 7' } },
                        { data: { source: 'palavra', target: 'contexto8', label: 'Contexto 8' } },
                        { data: { source: 'palavra', target: 'contexto9', label: 'Contexto 9' } },
                        { data: { source: 'palavra', target: 'sinonimo', label: 'Sinonimo ' } },

                        { data: { source: 'sinonimo', target: 'sinonimo1', label: 'Sinonimo 1' } },
                        { data: { source: 'sinonimo', target: 'sinonimo2', label: 'Sinonimo 2' } },
                        
                        { data: { source: 'contexto', target: 'sub1_c1', label: 'Substantivo contexto 1' } },
                        { data: { source: 'contexto', target: 'sub2_c1', label: 'Substantivo contexto 1' } },
                        { data: { source: 'contexto', target: 'verbo1_c1', label: 'Substantivo contexto 1' } },
                        { data: { source: 'contexto', target: 'verbo2_c1', label: 'Substantivo contexto 1' } },
                        { data: { source: 'contexto', target: 'adj1_c1', label: 'Substantivo contexto 1' } },
                        { data: { source: 'contexto', target: 'adj2_c1', label: 'Substantivo contexto 1' } },
                  

                        
                        { data: { source: 'contexto2', target: 'sub1_c2', label: 'Substantivo contexto 2' } },
                        { data: { source: 'contexto2', target: 'sub2_c2', label: 'Substantivo contexto 2' } },
                        { data: { source: 'contexto2', target: 'verbo1_c2', label: 'Substantivo contexto 2' } },
                        { data: { source: 'contexto2', target: 'verbo2_c2', label: 'Substantivo contexto 2' } },
                        { data: { source: 'contexto2', target: 'adj1_c2', label: 'Substantivo contexto 2' } },
                        { data: { source: 'contexto2', target: 'adj2_c2', label: 'Substantivo contexto 2' } },
                   

                        { data: { source: 'contexto3', target: 'sub1_c3', label: 'Substantivo contexto 3' } },
                        { data: { source: 'contexto3', target: 'sub2_c3', label: 'Substantivo contexto 3' } },
                        { data: { source: 'contexto3', target: 'verbo1_c3', label: 'Substantivo contexto 3' } },
                        { data: { source: 'contexto3', target: 'verbo2_c3', label: 'Substantivo contexto 3' } },
                        { data: { source: 'contexto3', target: 'adj1_c3', label: 'Substantivo contexto 3' } },
                        { data: { source: 'contexto3', target: 'adj2_c3', label: 'Substantivo contexto 3' } },
                 

                        { data: { source: 'contexto4', target: 'sub1_c4', label: 'Substantivo contexto 4' } },
                        { data: { source: 'contexto4', target: 'sub2_c4', label: 'Substantivo contexto 4' } },
                        { data: { source: 'contexto4', target: 'verbo1_c4', label: 'Substantivo contexto 4' } },
                        { data: { source: 'contexto4', target: 'verbo2_c4', label: 'Substantivo contexto 4' } },
                        { data: { source: 'contexto4', target: 'adj1_c4', label: 'Substantivo contexto 4' } },
                        { data: { source: 'contexto4', target: 'adj2_c4', label: 'Substantivo contexto 4' } },
                       
                        { data: { source: 'contexto5', target: 'sub1_c5', label: 'Substantivo contexto 5' } },
                        { data: { source: 'contexto5', target: 'sub2_c5', label: 'Substantivo contexto 5' } },
                        { data: { source: 'contexto5', target: 'verbo1_c5', label: 'Substantivo contexto 5' } },
                        { data: { source: 'contexto5', target: 'verbo2_c5', label: 'Substantivo contexto 5' } },
                        { data: { source: 'contexto5', target: 'adj1_c5', label: 'Substantivo contexto 5' } },
                        { data: { source: 'contexto5', target: 'adj2_c5', label: 'Substantivo contexto 5' } },
   

                        { data: { source: 'contexto6', target: 'sub1_c6', label: 'Substantivo contexto 6' } },
                        { data: { source: 'contexto6', target: 'sub2_c6', label: 'Substantivo contexto 6' } },
                        { data: { source: 'contexto6', target: 'verbo1_c6', label: 'Substantivo contexto 6' } },
                        { data: { source: 'contexto6', target: 'verbo2_c6', label: 'Substantivo contexto 6' } },
                        { data: { source: 'contexto6', target: 'adj1_c6', label: 'Substantivo contexto 6' } },
                        { data: { source: 'contexto6', target: 'adj2_c6', label: 'Substantivo contexto 6' } },
                        

                        { data: { source: 'contexto7', target: 'sub1_c7', label: 'Substantivo contexto 7' } },
                        { data: { source: 'contexto7', target: 'sub2_c7', label: 'Substantivo contexto 7' } },
                        { data: { source: 'contexto7', target: 'verbo1_c7', label: 'Substantivo contexto 7' } },
                        { data: { source: 'contexto7', target: 'verbo2_c7', label: 'Substantivo contexto 7' } },
                        { data: { source: 'contexto7', target: 'adj1_c7', label: 'Substantivo contexto 7' } },
                        { data: { source: 'contexto7', target: 'adj2_c7', label: 'Substantivo contexto 7' } },
       

                        { data: { source: 'contexto8', target: 'sub1_c8', label: 'Substantivo contexto 8' } },
                        { data: { source: 'contexto8', target: 'sub2_c8', label: 'Substantivo contexto 8' } },
                        { data: { source: 'contexto8', target: 'verbo1_c8', label: 'Substantivo contexto 8' } },
                        { data: { source: 'contexto8', target: 'verbo2_c8', label: 'Substantivo contexto 8' } },
                        { data: { source: 'contexto8', target: 'adj1_c8', label: 'Substantivo contexto 8' } },
                        { data: { source: 'contexto8', target: 'adj2_c8', label: 'Substantivo contexto 8' } },
   

                        { data: { source: 'contexto9', target: 'sub1_c9', label: 'Substantivo contexto 9' } },
                        { data: { source: 'contexto9', target: 'sub2_c9', label: 'Substantivo contexto 9' } },
                        { data: { source: 'contexto9', target: 'verbo1_c9', label: 'Substantivo contexto 9' } },
                        { data: { source: 'contexto9', target: 'verbo2_c9', label: 'Substantivo contexto 9' } },
                        { data: { source: 'contexto9', target: 'adj1_c9', label: 'Substantivo contexto 9' } },
                        { data: { source: 'contexto9', target: 'adj2_c9', label: 'Substantivo contexto 9' } },


                    ]

                    }
                    style={{ 
                        width: this.state.w,
                        height: this.state.h,
                        border: 200                        
                    }}
                    
                    cy={(cy) => { this.cy = cy }}
                    layout={layout}
                    pan={ {x: 620, y: 100 }}
                    zoom={0.9}
                    minZoom={0.6}
                    maxZoom={1.3}                   
                    animate={true}
                />
                
            </div>
        )
    }
}