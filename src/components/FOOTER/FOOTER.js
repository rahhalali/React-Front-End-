import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./FOOTER.css";
class FOOTER extends Component {
  state = {
    id: "",
    vision: "",
    coding: "",
    internships: "",
    aim: "",
    teaching: "",
    anasweb: "",
    twitter: "",
    facebook: "",
    instagram: "",
    isEdit: false,
  };
  componentDidMount = async () => {
    const response = await fetch("http://localhost:4001/footer");
    const info = await response.json();
    this.setState({
      id: info.data[0]._id,
      vision: info.data[0].vision,
      coding: info.data[0].coding,
      internships: info.data[0].internships,
      aim: info.data[0].aim,
      teaching: info.data[0].teaching,
      anasweb: info.data[0].anasweb,
      twitter: info.data[0].twitter,
      instagram: info.data[0].instagram,
      facebook: info.data[0].facebook,
    });
    console.log("state", this.state);
  };
  togglestate = () => {
    let { isEdit } = this.state;
    this.setState({
      isEdit: !isEdit,
    });
  };
  handleChange = (e) => {
    this.setState({ twitter: e.target.value });
  };
  handleChange1 = (e) => {
    this.setState({ facebook: e.target.value });
  };
  handleChange2 = (e) => {
    this.setState({ instagram: e.target.value });
  };
  handleChange3 = (e) => {
    this.setState({ aim: e.target.value });
  };
  handleChange4 = (e) => {
    this.setState({ vision: e.target.value });
  };
  handleChange5 = (e) => {
    this.setState({ teaching: e.target.value });
  };
  handleChange6 = (e) => {
    this.setState({ internships: e.target.value });
  };
  handleChange7 = (e) => {
    this.setState({ coding: e.target.value });
  };
  handleChange8 = (e) => {
    this.setState({ anasweb: e.target.value });
  };
  Save = async () => {
    const twitter = document.getElementById("twitter").value;
    const facebook = document.getElementById("facebook").value;
    const instagram = document.getElementById("instagram").value;
    const aim = document.getElementById("aim").value;
    const vision = document.getElementById("vision").value;
    const coding = document.getElementById("coding").value;
    const teaching = document.getElementById("teaching").value;
    const internships = document.getElementById("internships").value;
    const anasweb = document.getElementById("anasweb").value;

    let response = await fetch(
      `http://localhost:4001/api/footer/${this.state.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          authorization: `Bearer ${localStorage.getItem("login")}`,
        },
        body: JSON.stringify({
          twitter,
          facebook,
          instagram,
          aim,
          vision,
          coding,
          teaching,
          internships,
          anasweb,
        }),
      }
    ).then((response) => response.json());
    if (response.status === "yes") {
      toast.dark("🦄 Wow The LINKS was Edited *Footer Page*!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  Edit = () => {
    return (
      <div className="NAV_Inner">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <label>
          <span>Aim :</span>
          <input
            type="text"
            id="aim"
            value={this.state.aim}
            name="aim"
            onChange={this.handleChange3}
          ></input>
        </label>
        <label>
          <span> Vision :</span>

          <input
            type="text"
            id="vision"
            value={this.state.vision}
            name="vision"
            onChange={this.handleChange4}
          ></input>
        </label>
        <label>
          <span> Teaching :</span>

          <input
            type="text"
            id="teaching"
            value={this.state.teaching}
            name="teaching"
            onChange={this.handleChange5}
          ></input>
        </label>
        <label>
          <span> Internships :</span>

          <input
            type="text"
            id="internships"
            value={this.state.internships}
            name="internships"
            onChange={this.handleChange6}
          ></input>
        </label>
        <label>
          <span> Coding :</span>

          <input
            type="text"
            id="coding"
            value={this.state.coding}
            name="coding"
            onChange={this.handleChange7}
          ></input>
        </label>
        <label>
          <span> Anas Web :</span>

          <input
            type="text"
            id="anasweb"
            value={this.state.anasweb}
            name="anasweb"
            onChange={this.handleChange8}
          ></input>
        </label>
        <label>
          <span>Twitter :</span>

          <input
            type="text"
            id="twitter"
            value={this.state.twitter}
            name="Twitter"
            onChange={this.handleChange}
          ></input>
        </label>
        <label>
          <span> FaceBook :</span>

          <input
            type="text"
            value={this.state.facebook}
            onChange={this.handleChange1}
            id="facebook"
            name="faceBook"
          ></input>
        </label>
        <label>
          <span> Insagram :</span>

          <input
            type="text"
            id="instagram"
            value={this.state.instagram}
            name="Instagram"
            onChange={this.handleChange2}
          ></input>
        </label>
        <button 
        className="toggle"
          onClick={() => {
            this.togglestate();
          }}
        >
          Close
        </button>
        <button
        className="SaVe"
          onClick={() => {
            this.Save();
          }}
        >
          Save
        </button>
      </div>
    );
  };
  render() {
    console.log(this.state);
    return (
      <div className="NAV">
        {!this.state.isEdit ? (
          <div className="NAV_OUTER">
            <table>
              <tr>
                <td className="uni">
                  <li>
                    <label>Aim: </label>{" "}
                  </li>
                </td>
                <td className="cc">{this.state.aim}</td>
                <td className="uni">
                  <li>
                    <label>Vision:</label>{" "}
                  </li>
                </td>
                <td className="cc">{this.state.vision}</td>
              </tr>

              <tr>
                <td className="uni">
                  <li>
                    <label>Teaching:</label>{" "}
                  </li>
                </td>
                <td className="cc">{this.state.teaching}</td>{" "}
                <td className="uni">
                  <li>
                    <label>Internships: </label>
                  </li>
                </td>
                <td className="cc">{this.state.internships}</td>
              </tr>
              <tr>
                <td className="uni">
                  <li>
                    <label>Coding: </label>
                  </li>
                </td>
                <td className="cc"> {this.state.coding}</td>
                <td className="uni">
                  <li>
                    <label>Anas web: </label>
                  </li>
                </td>
                <td className="cc">{this.state.anasweb}</td>
              </tr>

              <tr>
                <td className="uni">
                  <li>
                    <label>Twitter: </label>
                  </li>
                </td>
                <td className="cc">{this.state.twitter}</td>{" "}
                <td className="uni">
                  <li>
                    <label>Facebook: </label>
                  </li>
                </td>
                <td className="cc">{this.state.facebook}</td>
              </tr>
              <tr>
                <td className="uni">
                  <li>
                    <label>Instagram: </label>
                  </li>
                </td>
                <td className="cc">{this.state.instagram}</td>{" "}
                <td style={{ border: "0px" ,textAlign:"center" }}>
                  <button
                    className="SAVE"
                    onClick={() => {
                      this.togglestate();
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            </table>
          </div>
        ) : (
          this.Edit()
        )}
      </div>
    );
  }
}

export default FOOTER;
