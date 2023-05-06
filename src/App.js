import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from './components/Loader/Loader';

import ExampleClass from './components/Countries';




function App() {
  return (
    <Suspense fallback={<Loader/>}>
      <BrowserRouter>
          <Routes>
            <Route path="/"  element={<ExampleClass/> }/>
            
          </Routes>     
      </BrowserRouter>   
    </Suspense>
  );
}

export default App;
