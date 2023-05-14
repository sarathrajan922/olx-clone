import React from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";

import Posts from "../components/Posts/Post";
import Footer from "../components/Footer/Footer";

const Home=(props)=>{
    return (
        <>
        <div className="homeParentDiv">
      <Header />
      <Banner />
      <Posts />
      <Footer />
        </div>

        </>
    )
} 

export default Home;