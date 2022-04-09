import React from 'react';
import Intro from './components/intro/intro';
import Home from './components/home/home';
import Documents from './components/documents/documents';
import Socials from './components/socials/socials';
import Analysis from './components/analysis/analysis';
import Courses from './components/courses/courses';
import WithoutNav from './components/nav/withoutNav';
import WithNav from './components/nav/withNav';
import NAS from './components/nas100/nas100';
import XAU from './components/xau/xauusd';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import "./app.scss"
 
function App() {
  return (
      <Router>
          <Routes>
              <Route element={<WithoutNav/>}>
                <Route exact path="/" element={<Intro/>} />
              </Route>
              <Route element={<WithNav/>}>
                <Route exact path="/home" element={<Home/>}/>
                <Route exact path="/documents" element={<Documents/>} />
                <Route exact path="/socials" element={<Socials/>} />
                <Route exact path="/weekly-analysis" element={<Analysis/>}/>
                <Route exact path="/courses" element={<Courses/>} />
                <Route exact path="/weekly-analysis/NAS100" element={<NAS/>} />
                <Route exact path="/weekly-analysis/XAUUSD" element={<XAU/>} />
              </Route>
          </Routes>
      </Router>
    );
}

export default App;
 