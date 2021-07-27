import React, { Component } from "react";
import Pagination from "../AddHome/Pagination";
import { Link } from "react-router-dom";
import "./ListAbout.css";
class ListAbout extends Component {
  state = {
    items: [],
    currentPage: 1,
    itemsPerPage: 4,
  };
  componentDidMount = async () => {
    const response = await fetch("http://localhost:4001/GET/api/about");
    const info = await response.json();
    console.log("LIST-HOME", info.data);
    this.setState({
      items: info.data,
    });
  };
  Delete = async (id) => {
    this.setState({
      items: this.state.items.filter((item) => item._id !== id),
    });
    const response = await fetch(`http://localhost:4001/Listabout/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("login")}`,
      },
    });
    return response.json();
  };
  paginate = (pageNumber) =>
    this.setState({
      currentPage: pageNumber,
    });

  render() {
    const indexOfLastPost = this.state.currentPage * this.state.itemsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.itemsPerPage;
    const currentItems = this.state.items.slice(
      indexOfFirstPost,
      indexOfLastPost
    );
    return (
      <div>
        <h1 className="H1">About List</h1>
        {currentItems.map((item, index) => {
          return (
            <div className="list-home-page" key={index}>
              <ul>
                <li className=""><span className="Span">Title :</span>{item.title}</li>
                <li><span className="Span">Description Title :</span>{item.desc}</li>
                <li> <span className="Span">Description :</span>{item.desc1}</li>
                <li><span className="Span">Image :</span>{item.ImageUpload}</li>
              </ul>
              <button
                className="list-btn"
                onClick={() => {
                  this.Delete(item._id, index);
                }}
              >
                DELETE
              </button>
              <Link
                to={{
                  pathname: "/pop1",
                  item,
                }}
              >
                Edit
              </Link>
            </div>
          );
        })}
        <Pagination
          paginate={this.paginate}
          itemsPerPage={this.state.itemsPerPage}
          totalPosts={this.state.items.length}
        ></Pagination>
      </div>
    );
  }
}

export default ListAbout;
