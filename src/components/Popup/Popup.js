import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Redirect } from "react-router";
import "./Popup.css";
class Pop extends Component {
  state = {
    id: [this.props.location.item._id],
    title: [this.props.location.item.title],
    desc: [this.props.location.item.desc],
    desc1: [this.props.location.item.desc1],
    ImageUpload:[this.props.location.item.ImageUpload]
  };

  Save = async (e) => {
    const first = document.getElementById("first").value;
    const second = document.getElementById("second").value;
    const fourth = document.getElementById("fourth").value;
    const ImageUpload = document.getElementById("ImageUpload");
 
    console.log(first);
    const body = new FormData();
    body.append("first", first);
    body.append("second", second);
    body.append("fourth", fourth);
    body.append("ImageUpload", ImageUpload.files[0]);
    console.log(first ,second ,fourth);
    const response = await fetch(`http://localhost:4001/edit/${this.state.id}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("login")}`,
      },
        body,
    }).then((response) => response.json());
    if (response.status === "yes") {
      toast.dark("🦄 Wow The Post was Edited *Home Page*!", {
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

  Trigger = () => {
    <Redirect to="/dashboard"></Redirect>;
  };
  handler = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  handler1 = (e) => {
    this.setState({
      desc1: e.target.value,
    });
  };
  handler2 = (e) => {
    this.setState({
      desc: e.target.value,
    });
  };
  handler3 = (e) => {
    this.setState({
      ImageUpload: URL.createObjectURL(e.target.files[0]),
    });
  };
  render() {
    console.log(this.state);
    return (
      <div className="popup">
        <div className="popup-inner">
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
          <table>
            <tbody>
              {" "}
              <tr>
                <td className="Center">
                  <label>Title:</label>
                </td>
                <td>
                  <textarea
                    cols="65"
                    rows="10"
                    value={this.state.title}
                    onChange={this.handler}
                    type="text"
                    name="first"
                    id="first"
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td className="Center">
                  <label>Title Description:</label>
                </td>
                <td>
                  <textarea
                    cols="65"
                    rows="10"
                    value={this.state.desc1}
                    onChange={this.handler1}
                    type="text"
                    name="second"
                    id="second"
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td className="Center">
                  <label>Image :</label>
                </td>
                <td>
                  <input type="file" name="ImageUpload" onChange={this.handler3} id="ImageUpload"></input>
                </td>
              </tr>
              <tr>
                <td className="Center">
                  <label>Paragraph:</label>
                </td>
                <td>
                  <textarea
                    cols="65"
                    rows="10"
                    type="text"
                    name="fourth"
                    value={this.state.desc}
                    onChange={this.handler2}
                    id="fourth"
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td spanrow="2">
                  <button
                    className="save-btn"
                    onClick={() => {
                      this.Save()
                    }}
                  >
                    Save
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <button
            className="close-btn"
            onClick={() => {
              this.props.history.push("/dashboard");
            }}
          >
            X
          </button>
        </div>
      </div>
    );
  }
}

export default Pop;
