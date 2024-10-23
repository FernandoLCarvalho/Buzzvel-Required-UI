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
      <Header />
      <SectionHero />
      <SectionPickSun />
      <SectionServices />
      <SectionPowerful />
      <SectionTestimonials />
      <Footer />
    </>
  );
}
