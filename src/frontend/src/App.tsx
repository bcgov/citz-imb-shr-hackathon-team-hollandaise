import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="app flex min-h-screen flex-col">
      <Navbar />
      <div className="content m-8 mb-16 flex flex-grow items-center justify-center">
        <p className="text-4xl text-center text-gray-500">Welcome to the Hackathon!</p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
