import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './styles.css';

// import Listings from './pages/Listings';
// import PropertyDetails from './pages/PropertyDetails';
// import FindAgent from './pages/FindAgent';
// import Sell from './pages/Sell';
// import Login from './pages/Login';
// import AdminDashboard from './pages/AdminDashBoard';
import Navbar from './components/Navbar';
import './components/Navbar.css';
import Footer from './components/Footer';
import './components/Footer.css';
import { Buy } from './pages/Buy';
import './pages/Buy.css';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        {/* <Route path="/listings" element={<Listings />} /> */}
        {/* <Route path="/property/:id" element={<PropertyDetails />} /> */}
        {/* <Route path="/find-agent" element={<FindAgent />} /> */}
        {/* <Route path="/sell" element={<Sell />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/admin" element={<AdminDashboard />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;