import React, { Component } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Nav from "../Nav/Nav";
import "./InnerDashboard.css";
class InnerDashboard extends Component {
  state = {
    answer: "",
  };
  Clicable = (e) => {
    this.setState({
      answer: e.target.name,
    });
    console.log(this.state.answer);
  };

  render() {
    
    return (
      <div className="Inner">
        <div className="Grid">
          <div className="Header">
            <Header />
          </div>
          <div className="Flex">
            <div className="Inner1">
              <Nav Click={this.Clicable} />
            </div>
            <div className="Inner2">
              <Main Click={this.state.answer} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InnerDashboard;
