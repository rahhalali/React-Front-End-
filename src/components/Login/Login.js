import React from "react";
import "./login.css";
import AOS from "aos";
import "aos/dist/aos.css";
import login from "../images/login.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaLock } from "react-icons/fa";

class Login extends React.Component {
  state = {
    auth: "",
  };
  componentDidMount = () => {
    AOS.init({ duration: 2000 });
    window.scrollTo({
      top: 0,
    });
  };
  LogIN = async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const result = await fetch("http://localhost:4001/api/admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((res) => res.json());
    if (result.status === "ok") {
      localStorage.setItem(
        "login",
        JSON.stringify({
          token: result.data,
        }))
      this.props.history.push("/dashboard");
    } else {
      toast.error('🦄 Sorry !!! Only For Admin!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
         document.getElementById("username").value="";
         document.getElementById("password").value="";
    }
  };
  render() {
    return (
      <div data-aos="fade-left" className="login">
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
        <div className="login_image">
          <div className="image_img">
            <img src={login} alt="login" />
          </div>
        </div>
        <div className="Form">
          <form onSubmit={this.LogIN} autoComplete="off">
            <h2>
              <span className="Form_span">Log In</span> <FaLock></FaLock>
            </h2>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="UserName"
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }
}
export default Login;
