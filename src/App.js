import React, { Component } from "react";
import AddData from "./AddData";
import Display from "./Display";
import Nav from "./Nav";
import Api from "./Api";


export default class App extends Component {
    state = {
        personData: []
      }
    addData = (user) => {
        console.log(user);
        let personData = [...this.state.personData, user];
    
        this.setState({
          personData
        });
      }
    render() {


        return (
            <div>
                <Nav/>
                <AddData addData={this.addData}/>
                <Display personData={this.state.personData} />
                <Api/>
            </div>
        )
    }

}
