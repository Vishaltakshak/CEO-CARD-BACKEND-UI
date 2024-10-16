
import './App.css'
import LoginBody from './Components/Login/LoginPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AfterLogin from './Pages/AterLogin/AfterLogin';



function App() {
  

  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<LoginBody />} />
          <Route path="/after-login" element={<AfterLogin />} />
        </Routes>
      </Router>
    );


  
}

export default App
