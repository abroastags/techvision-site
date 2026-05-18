import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import AboutHero from './components/AboutHero.jsx';
import AboutStory from './components/AboutStory.jsx';
import AboutNumbers from './components/AboutNumbers.jsx';
import AboutPrinciples from './components/AboutPrinciples.jsx';
import AboutContact from './components/AboutContact.jsx';

export default function About() {
  return (
    <>
      <Header activeSection="about" />
      <AboutHero />
      <AboutStory />
      <AboutNumbers />
      <AboutPrinciples />
      <AboutContact />
      <Footer />
    </>
  );
}
