import { Analytics } from '@vercel/analytics/react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import About from './components/About';
import NewChapter from './components/NewChapter';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Timeline />
        <About />
        <NewChapter />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </>
  );
}
