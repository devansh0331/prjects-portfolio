
import './App.css';

import Project from "./projects/Project"
import Navbar from './navbar/Navbar'
import KnowMe from './knowMe/KnowMe'
import Footer from './footer/Footer'
import Experience from './experience/Experience'

import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<KnowMe/>}/>
        <Route path="/projects" element={<Project/>}/>
        <Route path="/experience" element={<Experience/>}/>
      
      {/* <Project/> */}
      </Routes>
      <Footer/>
      </Router>

    </div>
  );
}

export default App;
