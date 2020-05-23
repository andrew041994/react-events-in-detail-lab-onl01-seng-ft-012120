import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
    
    handleClick = (event) => {
        
     this.props.onReceiveCoordinates([event.clientX, event.clientY])
      
    }

    render() {
        // console.log(this.props)
        return (
            <button onClick={this.handleClick}>click me</button>
            // {this.props.onReceiveCoordinates(this.handleClick)}
         )
    }

}
