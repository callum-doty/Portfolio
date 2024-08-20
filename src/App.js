import Header from './components/Header.jsx';  // Import the Header component
import Home from './pages/Home.jsx';      // Import the Home component
import About from './pages/About';    // Import the About component
import Experience from './pages/Experience';  // Import the Experience component
import Work from './pages/Work';      // Import the Work component
import './styles/App.css';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Work" element={<Work />} />
        </Routes>
      </div>
    </>
  )
}

export default App;


