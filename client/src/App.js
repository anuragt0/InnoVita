import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageUpload from './component/ImageUpload';
import Report from './component/report/Report';
function App() {
  return (
    <Router>
    <div>
      <Routes>
        {/* <Route path="/" element={<ImageUpload />} /> */}
        <Route path="/" element={<Report/>} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
