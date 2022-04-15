import React from 'react';
import"./Section2.css"

export default function Section2() {
  return <section className='section2'>
      <div className='section2Div' >
           <div className='heading'>
               <h2>Why choose BAOIAM'S Classes?</h2>
           </div>
           <div className='d-flex justify-content-around section2row1'>
              <div className="whyBaoiam">
                 <img src="https://cdn1.byjus.com/byjusweb/img/classes/Mask Group 8.svg" alt="" />
                <h6>Two teachers insted of one!</h6>
              </div>
              <div className="whyBaoiam">
                <img src="https://cdn1.byjus.com/byjusweb/img/classes/Mask Group 9.svg" alt="" />
                <h6>One teacher - teaches concepts clearly</h6>
              </div>
              <div className="whyBaoiam">
                <img src="https://cdn1.byjus.com/byjusweb/img/classes/Mask Group 10.svg" alt="" />
                <h6>Another teacher - pays personal attention and solves student's doubts</h6>
              </div>
              <div className="whyBaoiam">
                <img src="https://cdn1.byjus.com/byjusweb/img/classes/Mask Group 10.svg" alt="" />
                <h6>Proven BAOIAM'S academic methodology</h6>
              </div>
              <div className="whyBaoiam">
                <img src="https://cdn1.byjus.com/byjusweb/img/classes/Mask Group 12.svg" alt="" />
                <h6>360<span>&#176;</span> teaching + learning system</h6>
              </div>
           </div>
      </div>
  </section> ;
}
