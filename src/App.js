import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Feature from './components/Feature';
import Articles from './components/Articles';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/contact';
import Blog from './pages/Blog';
import Careers from './pages/Careers';

// Separate Page Components
const Home = () => (
  <>
    <Hero />
    <Feature />
    <Footer />
  </>
);

const AboutPage = () => (
  <>
    <About />
    <Footer />
  </>
);

const ContactPage = () => (
  <>
    <Contact />
    <Footer />
  </>
);
const BlogPage = () => (
  <>
    <Blog />
    <Footer />
  </>
);

const CareersPage = () => (
  <>
    <Careers />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/careers" element={<CareersPage />} />
      </Routes>
    </Router>
  );
}

export default App;
