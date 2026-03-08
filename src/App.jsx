import { AnimatePresence, motion } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundFX from './components/BackgroundFX';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ResearchPage from './pages/ResearchPage';
import CertificatesPage from './pages/CertificatesPage';
import ContactPage from './pages/ContactPage';

const pageVariants = {
  initial: { opacity: 0, y: 20, filter: 'blur(8px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, y: -12, filter: 'blur(6px)' },
};

function AnimatedPage({ children }) {
  return (
    <motion.main
      className="page-shell"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      {children}
    </motion.main>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <div className="app-root">
      <BackgroundFX />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AnimatedPage><HomePage /></AnimatedPage>} />
          <Route path="/projects" element={<AnimatedPage><ProjectsPage /></AnimatedPage>} />
          <Route path="/projects/:slug" element={<AnimatedPage><ProjectDetailPage /></AnimatedPage>} />
          <Route path="/research" element={<AnimatedPage><ResearchPage /></AnimatedPage>} />
          <Route path="/certificates" element={<AnimatedPage><CertificatesPage /></AnimatedPage>} />
          <Route path="/contact" element={<AnimatedPage><ContactPage /></AnimatedPage>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
