import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header'


import Mains from './components/Mains';

function App() {


  return (
    <div>
      <Router>
      <Header />
       <Routes>
        <Route path="/" element={<Mains/>} />
      </Routes>
      </Router>
    </div>
  )
}

export default App
