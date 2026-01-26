import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Technologies from './pages/Technologies';
import AIPage from './pages/AIPage';
import BlockchainPage from './pages/BlockchainPage';
import CybersecurityPage from './pages/CybersecurityPage';
import SolutionsPage from './pages/SolutionsPage';
import CaseStudies from './pages/CaseStudies';
import Insights from './pages/Insights';
import Contact from './pages/Contact';
import Join from './pages/Join';
import Signup from './pages/Signup';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/technologies' element={<Technologies />} />
        <Route path='/technologies/ai' element={<AIPage />} />
        <Route path='/technologies/blockchain' element={<BlockchainPage />} />
        <Route path='/technologies/cybersecurity' element={<CybersecurityPage />} />
        <Route path='/solutions' element={<SolutionsPage />} />
        <Route path='/case-studies' element={<CaseStudies />} />
        <Route path='/insights' element={<Insights />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/join' element={<Join />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
