import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import DashboardLayout from './layout/DashboardLayout';
import DashboardHome from './pages/DashboardHome';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element ={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route element  ={<DashboardLayout />}>
          <Route path='/dashboard' element={<DashboardHome />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
