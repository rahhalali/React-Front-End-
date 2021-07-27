import React from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ListIcon from "@material-ui/icons/List";
import "./Nav.css";
const Nav = (props) => {
  return (
    <div className="LIST">
      <ul className="ul_nav">
        <li className="UL">
          <button onClick={props.Click} tybe="submit" name="Addhome">
            <span className="LI">
              <AddCircleIcon
                style={{
                  fontSize: 20,
                  paddingTop: "4px",
                  paddingRight: "10px",
                }}
              ></AddCircleIcon>
            </span>
            Add To Home Page
          </button>
        </li>
        <li className="UL">
        <button onClick={props.Click} tybe="submit" name="Addabout">
            <span className="LI">
              <AddCircleIcon
                style={{
                  fontSize: 20,
                  paddingTop: "4px",
                  paddingRight: "10px",
                }}
              ></AddCircleIcon>
            </span>
            Add To About Page
          </button>
        </li>
        <li className="UL">
        <button onClick={props.Click} tybe="submit" name="Listhome">
            {" "}
            <span className="LI">
              <ListIcon
                style={{
                  fontSize: 20,
                  paddingTop: "4px",
                  paddingRight: "10px",
                }}
              ></ListIcon>
            </span>
            List Home Page
          </button>
        </li>
        <li className="UL">
        <button onClick={props.Click} tybe="submit" name="Listabout" >
            <span className="LI">
              <ListIcon
                style={{
                  fontSize: 20,
                  paddingTop: "4px",
                  paddingRight: "10px",
                }}
              ></ListIcon>
            </span>
            List About Page
          </button>
        </li>
        <li className="UL">
        <button onClick={props.Click} tybe="submit" name="EDIT_NAV_LINK" >
            <span className="LI">
              <ListIcon
                style={{
                  fontSize: 20,
                  paddingTop: "4px",
                  paddingRight: "10px",
                }}
              ></ListIcon>
            </span>
            List Nav Link
          </button>
        </li>
        <li className="UL">
        <button onClick={props.Click} tybe="submit" name="EDIT_FOOTER_LINK" >
            <span className="LI">
              <ListIcon
                style={{
                  fontSize: 20,
                  paddingTop: "4px",
                  paddingRight: "10px",
                }}
              ></ListIcon>
            </span>
            List Footer Link
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
