import React, { Component } from 'react';
import Component1 from './functional/component1'
import Container1 from './containers/container1'

class App extends Component {
  
  rendeFunction1 = () =>{
    if(true) {
      return(
        <div>
          Condition 1
        </div>
      )
    }
    else {
      return(
        <div>
          Condition 2
        </div>
      )
    }
  }

  render() {
    return(
      <div>
        React
        <div>
          Div 1 
          {this.rendeFunction1()}
        </div>
        <div>
          Div 2
          {this.rendeFunction1()}
        </div>
      </div>
     
    )
  }
}

export default App;
