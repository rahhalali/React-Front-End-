import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { Component } from "react";
import "./NAV.css";
class NAV extends Component {
  state = {
    id:"",
    twitter: "",
    facebook: "",
    instagram: "",
    isEdit: false,
  }
  componentDidMount = async () => {
    const response = await fetch("http://localhost:4001/nav");
    const info = await response.json();
    this.setState({
      id: info.data[0]._id,
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
  Save = async() =>{
  const twitter =document.getElementById("twitter").value;
  const facebook =document.getElementById("facebook").value;
  const instagram =document.getElementById("instagram").value;
    console.log(twitter ,facebook ,instagram)
    let response = await fetch(`http://localhost:4001/api/nav/${this.state.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        authorization: `Bearer ${localStorage.getItem("login")}`,
      },
       body: JSON.stringify({
        twitter,
        facebook,
        instagram
      }),
    }).then((response) => response.json());
    if (response.status === "yes") {
      toast.dark("🦄 Wow The Post was Edited *NAV LINKS*!", {
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
        <span>FaceBook :</span>
          
          <input
            type="text"
            value={this.state.facebook}
            onChange={this.handleChange1}
            id="facebook"
            name="faceBook"
          ></input>
        </label>
        <label>
        <span>  Insagram :</span>
        
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
            this.Save()
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
            <li>
              <label><span className="Span">Twitter:</span> <u>{this.state.twitter}</u></label>
            </li>
            <li>
              <label><span className="Span">Facebook:</span> <u>{this.state.facebook}</u></label>
            </li>
            <li>
              <label><span className="Span">Instagram:</span><u>{this.state.instagram}</u> </label>
            </li>
            <button
              onClick={() => {
                this.togglestate();
              }}
            >
              Edit
            </button>
          </div>
        ) : (
          this.Edit()
        )}
      </div>
    );
  }
}

export default NAV;
