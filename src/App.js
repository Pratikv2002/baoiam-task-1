import './App.css';
import Footer from './Componant/Footer/Footer';
import Header from './Componant/Header/Header';
import Section8 from './Componant/SectionEight/Section8';
import Section11 from './Componant/SectionEleven/Section11';
import Section4 from './Componant/SectionFour/Section4';
import Section9 from './Componant/SectionNine.js/Section9';
import Section1 from './Componant/SectionOne/Section1';
import Section7 from './Componant/SectionSeven/Section7';
import Section6 from './Componant/SectionSix/Section6';
import Section3 from './Componant/SectionThree/Section3';
import Section2 from './Componant/SectionTwo/Section2';

function App() {
  return (
    <div className="App">
      <Header/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section6/>
      <Section7/>
      {/* <Section8/> */}
      <Section11/>
      <Section9/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
