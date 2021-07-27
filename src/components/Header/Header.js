import React, { Component } from "react";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import "./Header.css";
import { withRouter } from "react-router-dom";
class Header extends Component {
  Logout = () => {
    localStorage.removeItem("login");
    this.props.history.push("/login");
  };
  state = {};
  render() {
    return (
      <div className="Header_Header">
        <span
          className="Btn"
          onClick={() => {
            this.Logout();
          }}
        >
          {" "}
          <ExitToAppIcon style={{ fontSize: 30 ,paddingTop: "5px"}} />{" "}
        </span>
        <span className="Header_span">Log out</span>
      </div>
    );
  }
}

export default withRouter(Header);
