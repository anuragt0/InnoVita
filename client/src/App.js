import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageUpload from './component/ImageUpload';
import Home from './component/Home';

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<ImageUpload />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
