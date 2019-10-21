import React, {Component} from 'react';
import Component1 from '../functional/component1'

class Cotainer1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stateprop1: "Our initial state",
            stateprop2: 5
        }
    }

    changeState = () => (
        this.setState({ 
            stateprop2: this.state.stateprop2 + 1,
            stateprop1: this.state.stateprop1 + "L"
        })
    )

    changeState2 = () => (
        this.setState({ stateprop1: this.state.stateprop1 + "L",
        stateprop2: this.state.stateprop2 + 1,
        })
    )


 render(){
    return(
     <div>
         <button onClick={() => this.changeState()}> change state</button>
         {this.state.stateprop2}
         <br/>
         <button onClick={() => this.changeState2()}> change state2</button>
         <br/>
         {this.state.stateprop1}
         <br/>
         <Component1 prop1= {this.state.stateprop1}/>
         <br/>
         
     </div>
    )
  }
}

export default Cotainer1