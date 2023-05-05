import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cards from './components/Cards';
import Card from './components/Card';
import { Suspense } from 'react';
import Loader from './components/Loader/Loader';


function App() {
  return (
    <Suspense fallback={<Loader/>}>
      <BrowserRouter>
          <Routes>
            <Route path="/"  element={<Cards/> }/>
            <Route path="/:id"  element={<Card/>}/>
          </Routes>     
      </BrowserRouter>   
    </Suspense>
  );
}

export default App;
