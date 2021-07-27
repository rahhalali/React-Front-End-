import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import InnerDashboard from "../InnerDashboard/InnerDashboard";
class Dashboard extends Component {

  render() {
    return (
      <div  className="Dash">
        {localStorage.getItem("login", true) ? (
          <div>
            <InnerDashboard />
          </div>
        ) : (
          <Redirect to="/login"></Redirect>
        )}
      </div>
    );
  }
}
export default Dashboard;
