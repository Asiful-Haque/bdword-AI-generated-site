// pages/index.js
import FAQ from '../components/FAQ';
import FeatureSection from '../components/FeatureSection';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Slider from '../components/Slider';
import TwoPart from '../components/TwoPart';
// import Footer from '../components/Footer';

const demoTestimonials = [
    {
      name: "Bob",
      message: "I never knew searching for words could be this much fun! Totally hooked!",
      date: "February 2, 2025"
    },
    {
      name: "Alice",
      message: "A great way to discover new words and enrich my vocabulary. Highly recommended!",
      date: "February 3, 2025"
    },
    {
      name: "John",
      message: "I love how easy it is to find the meanings and synonyms of words. A must-have tool!",
      date: "February 4, 2025"
    },
  ];

export default function Home() {
  return (
    <div>
      <Header />
       <MainContent/>
       <FAQ/>
       <Slider testimonials={demoTestimonials} />
       <TwoPart/>
       <FeatureSection />
    </div>
  );
}
