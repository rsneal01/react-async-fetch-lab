// create your App component here
import React, { Component } from "react";

class App extends Component {

    render(){

    }
    
    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
            .then ((resp) => resp.json())
            .then ((data) => {
                this.setState({

                })
            })
    }
}


export default App;