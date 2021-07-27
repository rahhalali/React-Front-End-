import React from "react";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import "./Home.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Input from "@material-ui/core/Input";

class Home extends React.Component {
  state = {
    items: [],
    filters: "",
    test: true,
  };

  async componentDidMount() {
    const response = await fetch("http://localhost:4001/GET/api/home");
    const info = await response.json();
    //console.log(data);
    console.log("ali", info.data);
    console.log("abbas");
    this.setState({
      items: info.data,
    });
    // AOS.init({duration:2000});
    AOS.init();
  }
  render() {
    return (
      <div className="home">
        <div className="home-1">
          <div data-aos="fade-left" id="Search">
            <div id="search-bar">
              <h3 data-aos="fade-up-right">Search</h3>
              <form>
                <Input
                  style={{
                    border: "2px solid black",
                    borderRadius: "16px",
                    outline: "none",
                    background: "transperant",
                    "&:hover": {
                      background: "none",
                    },
                  }}
                  disableUnderline={true}
                  onChange={(event) =>
                    this.setState({
                      filters: event.target.value,
                    })
                  }
                  type="text"
                  id="search-input"
                  placeholder="Search..."
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </form>
            </div>
          </div>
          <div id="a">
            {this.state.items
              .filter((list) => {
                if (this.state.filters === "") {
                  return list;
                } else if (
                  list.title
                    .toLowerCase()
                    .includes(this.state.filters.toLowerCase())
                ) {
                  return list;
                }
              })
              .reverse()
              .map((list, index) => {
                return (
                  <div data-aos="fade-right" id="content" key={index}>
                    <div className="date">
                      <span className="spn">{list.date}</span>
                    </div>
                    <div
                      data-aos="fade-down-right"
                      className="image"
                      id="Image"
                    >
                      <img
                        src={`http://localhost:4001/uploads/${list.ImageUpload.slice(
                          50
                        )}`}
                        alt={list.ImageUpload}
                        height="350px"
                        width="100%"
                      ></img>
                    </div>
                    <div data-aos="fade-down-left" className="title">
                      <h2 className="title_1">{list.title}</h2>
                      <h3 className="title_1">{list.desc1}</h3>
                      <Link
                        to={{
                          pathname: `/new/${list._id}`,
                          
                        }}
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                );
              })}
            <div className="clear"></div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
