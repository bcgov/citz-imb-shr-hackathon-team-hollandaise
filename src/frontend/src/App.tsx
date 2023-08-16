import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Authenticated from './components/Authenticated';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app flex min-h-screen flex-col">
        <Navbar />
        <div className="content m-8 mb-16 flex flex-grow items-center justify-center">
          <Routes>
            <Route path="/" element={<Authenticated />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
