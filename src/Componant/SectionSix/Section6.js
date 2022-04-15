import React from 'react';
import Link from 'react-scroll/modules/components/Link';
import "./Section6.css"

export default function Section6() {
  return <section className='Section6'>
      <div className='Section6Div'>
      <div className='sec6Col2'>
                 <div className='Section6Row2Col2'>
                     <div>
                         <h3>A 360° teaching + learning system</h3>
                     </div>
                 </div>
                 <div className='Section6Row2Col2'>
                     <div><img src='https://cdn1.byjus.com/byjusweb/img/classes/homework1.svg'/></div>
                     <div>
                         <h5>HomeWork</h5>
                         <h6>Worksheets, class notes and practice through BAOIAM’S - The Learning App</h6>
                     </div>
                 </div>
                 <div className='Section6Row2Col2'>
                     <div><img src='https://cdn1.byjus.com/byjusweb/img/classes/testing1.svg'/></div>
                     <div>
                         <h5>Testing</h5>
                         <h6>Monthly subjective and objective tests covering the full syllabus and test discussions</h6>
                     </div>
                 </div>
                 <div className='Section6Row2Col2'>
                     <div><img src='https://cdn1.byjus.com/byjusweb/img/classes/reporting1.svg'/></div>
                     <div>
                         <h5>Reporting</h5>
                         <h6>Monthly report cards and completion rates</h6>
                     </div>
                 </div>
                 <div className='Section6Row2Col2'>
                     <div><img src='https://cdn1.byjus.com/byjusweb/img/classes/parent1.svg'/></div>
                     <div>
                         <h5>Parent Teacher Meetings</h5>
                         <h6>Mentor feedback and guidance through PTMs</h6>
                     </div>
                 </div>
                 <div className='Section6Row2Col2'>
                     <Link to='bookClass'>Book a Free Class</Link>
                 </div>
             </div>
             <div className='row2Col1Col2 Col1'>
                 <img className='section6Img' src='https://cdn1.byjus.com/byjusweb/img/classes/360_learning.jpg'/>
             </div>
      </div>
  </section>;
}
