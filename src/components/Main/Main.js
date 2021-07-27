import React, { Component } from "react";
import AddAbout from "../AddAbout/AddAbout";
import AddHome from "../AddHome/AddHome";
import ListAbout from "../ListAbout/ListAbout";
import ListHome from "../ListHome.js/ListHome";
import FOOTER from "../FOOTER/FOOTER"
import NAV from "../NAV_LINK/NAV"
import "./Main.css";
class Main extends Component {
  render() {
    return (
      <div className="Main_Main">
        {this.props.Click === "Addabout" && <AddAbout></AddAbout>}
        {this.props.Click === "Addhome" && <AddHome></AddHome>}
        {this.props.Click === "Listhome" && <ListHome></ListHome>}
        {this.props.Click === "Listabout" && <ListAbout></ListAbout>}
        {this.props.Click === "EDIT_NAV_LINK" && <NAV></NAV>}
        {this.props.Click === "EDIT_FOOTER_LINK" && <FOOTER></FOOTER>}
      </div>
    );
  }
}

export default Main;
