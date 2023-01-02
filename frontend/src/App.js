import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import { useSol } from './containers/hook/useSol';
import SignIn from './containers/Signin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Quiz from './components/Quiz';
import About from './components/About';
import Profile from './components/Profile';
import ProblemPage from './components/ProblemPage';

function App() {
  const { signedIn } = useSol();
  
  return (
    <>
      { !signedIn ? <SignIn /> 
        :     
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" >
                <Route index element={<Home />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/quiz" element={<Quiz />} />
                  <Route path="/quiz/:id" element={<ProblemPage />} />
                  <Route path="/about-us" element={<About />} />
              </Route>
            </Routes>
          </Router>

      }
    </>   
  );
}

export default App;
