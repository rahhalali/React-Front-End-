import ContactForm from "./components/Contact/ContactForm";
import Particles from "react-particles-js";
import { BrowserRouter, Route, withRouter ,Switch} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import New from "./components/New/New";
import Login from "./components/Login/Login";
import Footer from "./Footer/Footer";
import Dashboard from "./components/Dashboard/Dashboard";
import Pop from "./components/Popup/Popup";
import Pop1 from "./components/Popup1/Popup1"
import SlideRoutes from "react-slide-routes";
import React from 'react'
const Ani = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};
const Main = withRouter(({ location }) => {
  return (
    <div>
      {location.pathname !== "/login" && location.pathname !== "/dashboard" && location.pathname !== "/pop" && location.pathname !== "/pop1" && (
        <Navbar></Navbar>
      )}
      <SlideRoutes duration={1000} animation="slide" location={location}>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={ContactForm}></Route>
      </SlideRoutes>
      <Route exact path="/new/:id" component={New}></Route>
      <Route exact path="/pop" component={Pop}></Route>
      <Route exact path="/pop1" component={Pop1}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/dashboard" component={Dashboard}></Route>
      {location.pathname !== "/login" && location.pathname !== "/dashboard" && location.pathname !== "/pop" && location.pathname !== "/pop1" &&(
        <Footer></Footer>
      )}
    </div>
  );
});
const App = () => {
  return (
    <div className="App">
      <Particles params={Ani} className="part" />
      <BrowserRouter>
      <Switch>
        <Main></Main> 
         </Switch>
      </BrowserRouter>
    
    </div>
  );
};

export default App;
