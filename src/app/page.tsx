import Header from './components/Header';
import SectionHero from './components/SectionHero';
import SectionPickSun from './components/SectionPickSun';
import SectionServices from './components/SectionServices';
import SectionPowerful from './components/SectionPowerful';
import SectionTestimonials from './components/SectionsTestimonials';
import Footer from './components/Footer';
import './styles/homepage.css';

export default function HomePage() {
  return (
    <>
      <div className="background-container">
        <img src="/Mask masked.svg" alt="Man working on solar panels" className="background-image" />
      </div>
      <Header />
      <SectionHero />
      <SectionPickSun />
      <SectionServices />
      {/* <SectionPowerful />
      <SectionTestimonials />
      <Footer /> */}
    </>
  );
}
