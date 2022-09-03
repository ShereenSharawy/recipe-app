import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from './layouts/header/header';
import Footer from './layouts/footer/footer';
import Home from './pages/home';
import Recipes from './pages/recipes';
import ErrorPage from './pages/errorpage';
function App() {
//<img src={require('./assets/images/gallery/img_1.jpg')}  width="200" height="100"/>
  return (
   <Router>
    <Header/>    
  
    <div className="container main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
    <Footer />
  </Router>
    );

}

export default App;
