import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageUpload from './component/ImageUpload';
import Main from './component/Main';

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/image" element={<ImageUpload />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
