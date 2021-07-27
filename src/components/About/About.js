import React ,{Component} from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
class About extends Component {
  state = {
    items: [],
  };
  componentDidMount = async () => {
    const response = await fetch("http://localhost:4001/GET/api/about");
    const info = await response.json();
    //console.log(data);
    console.log("about", info.data);
    console.log("about");
    this.setState({
      items: info.data,
    });
    AOS.init({ duration: 2000 });
  };

  render() {
    console.log("about");
    return (
      <div>
        {this.state.items.map((item) => {
          return (
            <div className="about" key={item._id}>
              <header>
                <div data-aos="fade-left" className="about_header_inner">
                  <h1>{item.title}</h1>
                  <span className="about_Date">{item.date}</span>
                </div>
              </header>
              <main data-aos="fade-down-right">
                <article className="about_main_article">
                  <h2>{item.desc1}</h2>
                </article>
                <article className="about_main_image">
                  <div className="about_main_image_1">
                  <img
                        src={`http://localhost:4001/uploads/${item.ImageUpload.slice(
                          50
                        )}`}
                        alt={item.ImageUpload}
                        height="500px"
                        width="100%"
                      ></img>
                  </div>
                </article>
              </main>
              <article className="about_all_article">
                <p>{item.desc}</p>
              </article>
            </div>
          );
        })}
      </div>
    );
  }
}

export default About;
