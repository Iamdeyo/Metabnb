import Footer from './compontents/Footer';
import Navbar from './compontents/Navbar';
import Home from './pages/Home';
import PlaceToStay from './pages/PlaceToStay';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/placetostay" element={<PlaceToStay />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
