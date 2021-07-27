import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AddHome.css";

class AddHome extends Component {
  Handler = async (e) => {
    e.preventDefault();
    const { name, title_desc, upload_image, paragraph } = e.target.elements;
    const body = new FormData();
    body.append("name", name.value);
    body.append("title_desc", title_desc.value);
    body.append("paragraph", paragraph.value);
    body.append("ImageUpload", upload_image.files[0]);
    const response = await fetch("http://localhost:4001/api/add", {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("login")}`,
      },
      body,
    }).then((response) => response.json());

    if (response.status === 200) {
      toast.dark('🦄 Wow Added to Home Page !', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
   document.getElementById("name").value="";
   document.getElementById("paragraph").value="";
   document.getElementById("title_desc").value="";
  

  };
  render() {
    return (
     
      <div className="AddHome">
         <h2 className="H2">Add Home</h2>
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
        <form onSubmit={this.Handler} className="FormAdd">
          <div className="Title first">
            <textarea
              placeholder="Add New Title ...."
              cols="30"
              rows="10"
              id="name"
              name="name"
            ></textarea>
          </div>
          <div className="title_desc first">
            <textarea
              placeholder="Add New Title_decription ...."
              cols="30"
              rows="10"
              id="title_desc"
              name="title_desc"
            ></textarea>
          </div>
          <div className="upload_Image first">
            <input
              type="file"
              id="upload_image"
              name="upload_image"
              placeholder="UploadImage"
            ></input>
          </div>
          <div className="paragraph first">
            <textarea
              placeholder="Add New paragraph ...."
              cols="20"
              rows="10"
              id="paragraph"
              name="paragraph"
            ></textarea>
          </div>
         
          <div className="Action first">
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddHome;
