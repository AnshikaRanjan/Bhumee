import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import Header from './Header/header';
import Home from './Components/Home';
import About from './About/about';
import Portfolio from './Portfolio/portfolio';

function App() {
  return (
    <BrowserRouter> {/* Wrap your application with BrowserRouter */}
      <div className="App">
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
