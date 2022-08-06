import { Route, Routes } from 'react-router-dom';
import About from './About/About';
import './App.css';
import Blogs from './Blogs/Blogs';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Navbar from './Navbar';
import Project from './Project/Project';
import Resume from './Resume/Resume';
function App() {
  return (
    <div className="px-5 py-5">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/resume" element={<Resume></Resume>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/project" element={<Project></Project>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
