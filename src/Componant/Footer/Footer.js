import React from 'react';
import "./Footer.css"
import  google from"./Google-play-badge.png"

export default function Footer() {

  return <div> 
      <footer className="bg-dark footer5 text-white">
    <div className="container">
      <div className="space-top-2 space-bottom-1 space-bottom-lg-2">
        <div className="row justify-content-lg-between">
          <div className="col-lg-3 ml-lg-auto mb-5 mb-lg-0">
           <ul className="nav nav-sm nav-x-0 nav-white flex-column" style={{paddingRight: "60px", marginLeft:" -60px"}}>
              <li className="nav-item">
                <a className="nav-link media" href="#">
                    <span className="media">
                      <div style={{paddingTop: "10px"}}></div>
                      <span className="fas fa-location-arrow mt-1 mr-2" style={{marginBottom: "-10px"}} ></span>
                      <span className="media-body">
                        <h5 className="text-white" style={{fontSize:" 21px", marginTop: "-10px"}}>Address</h5>
                        <p style={{paddingTop:" 10px"}}>
                        28°37'44.9"N 77°22'48.4"E
                        H-182, Second Floor, Sector 63, Noida, Uttar Pradesh 201301</p>
                      </span>
                    </span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link media" href="tel:+91-9310143463">
                    <span className="media">
                      <span className="fas fa-phone-alt mt-1 mr-2"></span>
                      <span className="media-body">
                        <h5 className="text-white" style={{fontSize: "21px"}}>Talk With Us</h5>
                        +91 1234567890
                      </span>
                    </span>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-4 col-lg mb-5 mb-lg-0" style={{paddingLeft:" 60px"}}>
            <h5 className="text-white">Company</h5>
            <ul className="nav nav-sm nav-x-0 nav-white flex-column">
              <li className="nav-item"><a className="nav-link" href="#">About us</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact us</a></li>
              <li className="nav-item"><a className="nav-link" href="#">BAOIAM Blog</a></li>
              <li className="nav-item"><a className="nav-link" href="#">News</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Child saftey</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Why BAOIAM</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Our results</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Careers</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Help India lean</a></li>

            </ul>
          </div>

          <div className="col-6 col-md-4 col-lg mb-5 mb-lg-0" style={{paddingLeft:" 60px"}}>
            <h5 className="text-white">Other Links</h5>
            <ul className="nav nav-sm nav-x-0 nav-white flex-column">
              <li className="nav-item"><a className="nav-link" href="#">Free live classNamees</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Why teach with BAOIAM</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Try WAVE</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Try Whiteboard</a></li>
              <li className="nav-item"><a className="nav-link" href="#">BAAOIAM improvement promise</a></li>
              <li className="nav-item"><a className="nav-link" href="#">VOLT</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Macro courses</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Maharastra Board</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Benefits</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Engineering Blog</a></li>

            </ul>
           </div>
          <div className="col-6 col-md-4 col-lg">
            <ul className="nav nav-sm nav-x-0 nav-white flex-column" style={{paddingLeft: "100px", marginRight: "-70px"}}>
              <h5 className="text-white">Social Media Links</h5>
              <li className="nav-item"><a className="nav-link" href="https://www.facebook.com/people/%F0%9D%98%BD%F0%9D%98%BC%F0%9D%99%8A-%F0%9D%99%84%F0%9D%98%BC%F0%9D%99%88-%F0%9D%98%89%F0%9D%98%A6-%F0%9D%98%88-%F0%9D%98%96%F0%9D%98%AF%F0%9D%98%A6-%F0%9D%98%90%F0%9D%98%AF-%F0%9D%98%88-%F0%9D%98%94%F0%9D%98%AA%F0%9D%98%AD%F0%9D%98%AD%F0%9D%98%AA%F0%9D%98%B0%F0%9D%98%AF/100064896061625/"><i className="fab fa-facebook fa-2x"></i></a></li>
              <li className="nav-item"><a className="nav-link" href="https://twitter.com/BAOIAM1"><i className="fab fa-twitter fa-2x"></i></a></li>
              <li className="nav-item"><a className="nav-link" href="https://instagram.com/beaoneinamillion?utm_medium=copy_link"><i className="fab fa-instagram fa-2x"></i></a></li>
              <li className="nav-item"><a className="nav-link" href="https://www.linkedin.com/company/baoiam-innovations-pvt-ltd"><i className="fab fa-linkedin fa-2x"></i></a></li>
              <li className="nav-item"><a className="nav-link" href="#"><img className="footer_image"src={google}/></a></li>
              <li className="nav-item"><a className="nav-link" href="#"><button className="btn55">Ask to Expert</button></a></li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="opacity-xs my-0" style={{marginLeft:" -60px", marginRight: "-60px"}}/>

      <div className="space-1" style={{paddingLeft:" 24%", paddingRight: "20%"}}>
        <div className="row align-items-md-center">
          </div>

          <div className="col-md-4 mb-4 mb-md-0">
            </div>
          <div className="col-md-4 mb-4 mb-md-0 text-center">
            </div>
            <p className="rightsPart" style={{opacity:" .4", textAlign:" none", display: "inline-block"}}>&copy; 2022 All Rights Reserved-BOAIAM</p>
            <p className="rightsPart" style={{opacity: ".4", textAlign: "none", display: "inline-block"}}> &nbsp; &nbsp;  Privacy Policy</p>
            <p className="rightsPart" style={{opacity: ".4", textAlign:" none", display: "inline-block"}}> &nbsp; &nbsp;  Terms and conditions</p>
          </div>
    </div>
  </footer>
  </div>
}
