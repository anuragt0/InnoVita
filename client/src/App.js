import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageUpload from './component/ImageUpload';

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<ImageUpload />} />
        
      </Routes>
    </div>
  </Router>
  );
}

export default App;
