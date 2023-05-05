import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from './components/Loader/Loader';
import Countries from './components/Countries';
import Country from './components/Country';


function App() {
  return (
    <Suspense fallback={<Loader/>}>
      <BrowserRouter>
          <Routes>
            <Route path="/"  element={<Countries/> }/>
            <Route path="/name/:countryName"  element={<Country/>}/>
          </Routes>     
      </BrowserRouter>   
    </Suspense>
  );
}

export default App;
