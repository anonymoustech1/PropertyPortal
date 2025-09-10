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
import Footer from './components/Footer';
import { Buy } from './pages/Buy';




// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/buy" element={<Buy />} />
//         {/* Add more routes here */}
//       </Routes>
//       <Footer />
//     </>
//   );
// }

function App() {
  return 
  <>
    <Navbar/>
    <Routes>
       <Route path="/" element={<Home />} />
    </Routes>
    <h1>Hello World</h1>;
  </>
}

export default App;