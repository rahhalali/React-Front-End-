import React ,{Component}from "react";
import { withRouter } from "react-router";
import "./New.css";
import AOS from "aos";
import "aos/dist/aos.css";
class New extends Component {
  state = {
    title:'',
    desc:'',
    desc1:'',
    ImageUpload:'',
    date:''
  };
  componentDidMount = async() => {
    const id = this.props.match.params.id;
    const response = await fetch(`http://localhost:4001/new/${id}`);
    const info = await response.json();
    console.log("before setstate1", this.state.items);
    console.log("before setstate", info.data);
    const IT=info.data;
    console.log("IT",IT);
    this.setState({
      title:IT.title,
      date:IT.date,
      desc:IT.desc,
      desc1:IT.desc1,
      ImageUpload:IT.ImageUpload
    })
    console.log("AFter setstate",this.state.title)
    AOS.init({ duration: 2000 });
    window.scrollTo({
      top: 0,
    });
    console.log("e5er she ",this.state.items)
   };
  
  render() {
    return (
      <div>
       
          
            <div className="all" >
              <header>
                <div data-aos="fade-left" className="header_inner">
                  <h1>{this.state.title}</h1>
                  <span className="Date">{this.state.date}</span>
                </div>
              </header>
              <main data-aos="fade-down-right">
                <article className="main_article">
                  <h2>{this.state.desc1}</h2>
                </article>
                <article className="main_image">
                  <div className="main_image_1">
                    <img  src={`http://localhost:4001/uploads/${(this.state.ImageUpload).slice(50)}`} width="100%" height="500px" alt="image" />
                  </div>
                </article>
              </main>
              <article className="all_article">
                <p>{this.state.desc}</p>
              </article>
            </div>
          
        
      </div>
    );
  }
}

export default withRouter(New);
