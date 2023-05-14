import React from "react";
import './Footer.css';
import phoneImg from '../../assets/img/phone-app.webp'
import appstore from '../../assets/img/appstore.webp'
import playstore from '../../assets/img/playstore.webp'
import "bootstrap/dist/css/bootstrap.min.css";


const Footer = ()=>{
    return (
        <>
        <div className=" container footer-img ">
           
            <div className="container-fluid" >
                <img src={phoneImg}  alt="" />
            </div>
            <div className="col-lg-6 ms-5 ">
                 <h1>TRY THE OLX APP</h1> 
                 <p>Buy, sell and find just about anything <br></br>using the app on your mobile.</p> 
            </div>
            
            <div className="row">
                <h4>GET YOUR APP TODAY</h4> 
                <div className="col">
                    <img src={appstore} alt="" />
                </div>
                <div className="col">
                    <img src={playstore} alt="" />
                </div>
            </div>
        </div>
    <div className="footerParentDiv">
      <div className="content">
        <div>
       
          <div className="list">
            <ul>
            <li className="footer-heading">POPULAR LOCATIONS</li>
              <li>kolkata</li>
              <li>Mumbai</li>
              <li>Chennai</li>
              <li>Pune</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="list">
            <ul>
            <li className="footer-heading">TRENDING LOCATIONS</li>
              <li>Bhubaneshwar</li>
              <li>Hyderabad</li>
              <li>Chandigarh</li>
              <li>Nashik</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="list">
            <ul>
            <li className="footer-heading">ABOUT US</li>
              <li>About OLX Group</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>OLXPeople</li>
              <li>Waah Jobs</li>
            </ul>
          </div>
        </div>
        <div>
        
          <div className="list">
            <ul>
            <li className="footer-heading">OLX</li>

              <li>Help</li>
              <li>Sitemap</li>
              <li>Legal & Privacy information</li>
              <li>Blog</li>
              <li>OLX Autos Sell Car</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Other Countries Pakistan - South Africa - Indonesia</p>
        <p>Free Classifieds in India. © 2006-2021 OLX</p>
      </div>
    </div>
        </>
    )
}

export default Footer