import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Technologies from './pages/Technologies';
import SolutionsPage from './pages/SolutionsPage';
import CaseStudies from './pages/CaseStudies';
import Insights from './pages/Insights';
import Media from './pages/Media';
import Partners from './pages/Partners';
import Contact from './pages/Contact';
import Join from './pages/Join';
import Signup from './pages/Signup';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/technologies' element={<Technologies />} />
        <Route path='/solutions' element={<SolutionsPage />} />
        <Route path='/case-studies' element={<CaseStudies />} />
        <Route path='/insights' element={<Insights />} />
        <Route path='/media' element={<Media />} />
        <Route path='/partners' element={<Partners />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/join' element={<Join />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
