import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
<<<<<<< Updated upstream
=======
import Authenticated from './components/Authenticated';
>>>>>>> Stashed changes
import './index.css';

function App() {
  return (
<<<<<<< Updated upstream
    <div className="app flex min-h-screen flex-col">
      <Navbar />
      <div className="content m-8 mb-16 flex flex-grow items-center justify-center">
        <p className="text-4xl text-center text-gray-500">Welcome to the Hackathon!</p>
=======
    <Router>
      <div className="app flex min-h-screen flex-col">
        <Navbar />
        <div className="content m-8 mb-16 flex flex-grow items-center justify-center">
          <Routes>
            <Route path="/" element={<Authenticated />} />
          </Routes>
        </div>
        <Footer />
>>>>>>> Stashed changes
      </div>
    </Router>
  );
}

export default App;
