import React,{useState} from 'react';
import "./Header.css"
import logo from './Logo.png';
import { Link } from 'react-scroll/modules';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';


export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);
    
    var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}
    
  return <div >
      <nav id='navbar' className='navbar navbar-bjn classes-reg'>
          <div className='container-nav'>
          <div>
              <a className='navbar-brand' href="">
                  <img className='brand' src={logo} alt="" />
                  <Link id='BrandName' className='brandName' to="baoiam"><h3>BAOIAM</h3></Link>
              </a>
          </div>
          
          <div >
              <ul  className="nav navbar-nav">
                  <li><Link id='navItem' to="features">Features</Link></li>
                  <li><Link id='navItem' to="testimonials">Testimonials</Link></li>
                  <li><Link id='navItem' to="faqs">FAQs</Link></li>
                  <li><Link id='navItem' to="advantage">BAOIAM advantage</Link></li>
                  <li className='nav-link-btn'><Link className='btn b-btn' to="bookClass">Book A FREE Class</Link></li>
              </ul>
          </div>
          <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#000000" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#000000" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbar-menu_container scale-up-center">
          <div className="navbar-menu_container-links">
            <p><Link id='navItem' to="features">Features</Link></p>
            <p><Link id='navItem' to="testimonials">Testimonials</Link></p>
            <p><Link id='navItem' to="faqs">FAQs</Link></p>
            <p><Link id='navItem' to="advantage">BAOIAM advantage</Link></p>
            <p><Link className='btn b-btn' to="bookClass">Book A FREE Class</Link></p>
          </div>
        </div>
        )}
      </div>
          </div>

      </nav>
  </div>;
}

