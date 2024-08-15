import Header from './components/Header'
import './styles/App.css';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Work" element={<Work />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
