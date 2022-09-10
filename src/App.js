import React,{Component} from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Components/Header/Header';
import SectionHome from "./Components/Content/Section-Home";
import SectionAboutUs from "./Components/Content/SectionAboutUs";
import SectionMyEducation from "./Components/Content/SectionMyEducation";
import SectionContact from "./Components/Content/SectionContact";
import SectionProjects from "./Components/Content/SectionProjects";
import Footer from './Components/Footer/Footer';
import './App.css';
//import {Route} from 'react-router-dom';
//import { render } from "react-dom";

class App extends Component{
  render(){
  return (
    <div className="myDiv">
     <Header/>
     <SectionHome/>
     <SectionAboutUs/>
     <SectionMyEducation/>
     <SectionProjects/>
     <SectionContact/>
     <Footer/>
    </div>
  );
  }
}

export default App;