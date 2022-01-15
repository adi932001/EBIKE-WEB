import React,{Fragment} from "react";
import Nav from "../core/Nav";
import Footer from "../core/Footer";
import About from "../core/About";
import Pic from "../core/Pic";
import "./Home.css"

const Home=()=>{
    return (
        <>
        <div className="all">
        <Nav/>
        <Pic/>
        <About/>
        <Footer/>
          </div>
        </>
    )
}
export default Home;