import Header from './components/Header';
import SectionHero from './components/SectionHero';
import SectionPickSun from './components/SectionPickSun';
import SectionServices from './components/SectionServices';
import SectionPowerful from './components/SectionPowerful';
import SectionTestimonials from './components/SectionsTestimonials';
import Footer from './components/Footer';
import './styles/homepage.css';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Soller - Get the Sun to Power Your Home</title>
        <meta name="description" content="Get the Sun to Power Your Home with Soller. Discover our solutions for sustainable and efficient solar energy to make your home energy independent." />
        <meta name="keywords" content="solar energy, home power, renewable energy, solar panels, soller, sustainable energy" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Soller - Get the Sun to Power Your Home" />
        <meta property="og:description" content="Discover Soller’s solutions for sustainable and efficient solar energy to power your home." />
        <meta property="og:image" content="/Mask masked.svg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://soller-buzzvel.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Soller - Get the Sun to Power Your Home" />
        <meta name="twitter:description" content="Discover Soller’s solutions for sustainable and efficient solar energy." />
        <meta name="twitter:image" content="/Mask masked.svg" />
      </Head>

      <div className="background-container">
        <img src="/Elipse 1.svg" alt="Ellipse Background" className="background-image" />
        <img src="/Mask masked.svg" alt="Man working on solar panels" className="foreground-image" />
      </div>
      <Header />
      <SectionHero />
      <SectionPickSun />
      <SectionServices />
      <SectionPowerful />
      <SectionTestimonials />
       {/* <Footer /> */}
    </>
  );
}