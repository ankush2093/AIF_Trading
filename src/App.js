
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from './components/Services';
import Carrier from './components/Carrier';
import Contactus from './components/Contactus';
import ErrorPage from './components/ErrorPage';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='Aboutus' element={<Aboutus/>}></Route>
        <Route path='Services' element={<Services/>}></Route>
        <Route path='Carrier' element={<Carrier/>}></Route>
        <Route path='Contactus' element={<Contactus/>}></Route>

          {/* Add the error route */}
    <Route path='*' element={<ErrorPage />} />

      </Routes>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
