import React from 'react';
import "./Section3.css"
import Link from 'react-scroll/modules/components/Link';
export default function Section3() {
  return <section id='features' className='section3'>
      <div>
         <div className='section3Div'>
             <h3>Two-teacher advantage</h3>
         </div>
         <div  className='section3Div secondRow'>
             <div className='row2Col1Col2 Col1'>
                 <img className='section3Img' src='https://cdn1.byjus.com/byjusweb/img/classes/Interactive Tutions1.png'/>
             </div>
             <div className='row2Col1Col2 Col2'>
                 <div className='Section3Row2Col2'>
                     <div><img src='https://cdn1.byjus.com/byjusweb/img/classes/Batches1.svg'/></div>
                     <div>
                         <h5>One teacher teaches concepts</h5>
                         <h6>The expert teacher explains and teaches topics
                              in-depth ensuring conceptual clarity</h6>
                     </div>
                 </div>
                 <div className='Section3Row2Col2'>
                     <div><img src='https://cdn1.byjus.com/byjusweb/img/classes/doubt resolution1.svg'/></div>
                     <div>
                         <h5>Other teacher pays personal attention</h5>
                         <h6>The second teacher facilitates a class of 20 and
                                pays attention to individual student’s needs making
                                the sessions interactive and engaging</h6>
                     </div>
                 </div>
                 <div className='Section3Row2Col2'>
                     <div><img src='https://cdn1.byjus.com/byjusweb/img/classes/visualisation1.svg'/></div>
                     <div>
                         <h5>Visualisation</h5>
                         <h6>The expert teacher teaches concepts
                              using strong visuals and storytelling </h6>
                     </div>
                 </div>
                 <div className='Section3Row2Col2'>
                     <div><img src='https://cdn1.byjus.com/byjusweb/img/classes/instant1.svg'/></div>
                     <div>
                         <h5>Instant doubt solving</h5>
                         <h6>The second teacher solves doubts instantly,
                             conducts tests and assigns homework</h6>
                     </div>
                 </div>
                 <div className='Section3Row2Col2'>
                     <Link to='bookClass'>Book a Free Class</Link>
                     </div>
             </div>
         </div>
      </div>
  </section>;
}
