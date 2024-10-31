import Header from './components/Header';
import SectionHero from './components/SectionHero';
import SectionPickSun from './components/SectionPickSun';
import SectionServices from './components/SectionServices';
import SectionPowerful from './components/SectionPowerful';
import SectionTestimonials from './components/SectionsTestimonials';
import Footer from './components/Footer';
import './styles/homepage.css';
import Container from './components/Container';
import Image from 'next/image';

export const metadata = {
  title: 'Home - Soller',
  description: 'Discover our home solutions for efficient solar energy',
};

export default function HomePage() {
  return (
    <>
      <div className="background-container">
        <Image src="/Elipse 1.svg" alt="Ellipse Background" className="background-image" width="673" height="694"/>
        <Image src="/Mask masked.svg" alt="Man working on solar panels" className="foreground-image" width="673" height="694"/>
      </div>
      <Header />
      <SectionHero />
      <SectionPickSun />
      <SectionServices />
      <SectionPowerful />
      <SectionTestimonials />
      <Container />
      <Footer />
    </>
  );
}