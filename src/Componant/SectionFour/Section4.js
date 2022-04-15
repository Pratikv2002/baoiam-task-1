import React from 'react';
import Link from 'react-scroll/modules/components/Link';
import "./Section4.css"

export default function Section4() {
  return <section className='Section4'>
      <div className='Section4Div'>
      <div className='sec4Col2'>
                 <div className='Section4Row2Col2'>
                     <div>
                         <h3>BAOIAM"S proven academic
                              methodology</h3>
                     </div>
                 </div>
                 <div className='Section4Row2Col2'>
                     <div><img src='https://cdn1.byjus.com/byjusweb/img/classes/design1.svg'/></div>
                     <div>
                         <h5>Designed to deliver results</h5>
                         <h6>Every class is carefully designed by experts
                              with methods that are proven to give results</h6>
                     </div>
                 </div>
                 <div className='Section4Row2Col2'>
                     <div><img src='https://cdn1.byjus.com/byjusweb/img/classes/class1.svg'/></div>
                     <div>
                         <h5>Classes structured to learn-practice-revise</h5>
                         <h6>Classes are structured to help students not just learn concepts but also practice and revise them</h6>
                     </div>
                 </div>
                 <div className='Section4Row2Col2'>
                     <div><img src='https://cdn1.byjus.com/byjusweb/img/classes/instant1.svg'/></div>
                     <div>
                         <h5>Tests, quizzes and worksheets</h5>
                         <h6>Tests, quizzes and worksheets for better practice and retention</h6>
                     </div>
                 </div>
                 <div className='Section4Row2Col2'>
                     <Link to='bookClass'>Book a Free Class</Link>
                 </div>
             </div>
             <div className='row2Col1Col2 Col1'>
                 <img className='section4Img' src='https://cdn1.byjus.com/byjusweb/img/classes/Personalised 1.png'/>
             </div>
      </div>
  </section>;
}
