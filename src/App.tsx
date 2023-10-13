import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";
import './App.scss'
import Index from './pages/Index'
import Hf from './layout/Hf'
import Signup from './pages/Signup'



function App() {
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    setLoading(100); 
  }, []);

  return (
    <>
      <LoadingBar
        color="#B8884B" 
        height={2} 
        loaderSpeed={200}
        progress={loading}
      />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/auth' element={<Hf />}>
          <Route path='signup' element={<Signup />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
