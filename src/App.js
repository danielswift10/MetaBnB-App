import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Metabnb from './pages/Airbnb/components/Metabnb/Metabnb';
import './App.css';
import Venues from './pages/PlaceToStay/components/Venues/Venues';
import Modal from './pages/Airbnb/components/Modal/Modal';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/'  element={<Metabnb/>}/>
        <Route path='/place-to-stay'  element={<Venues/>}/>
        <Route path='/modal'  element={<Modal/>}/>
        {/* <Route path='*'  element={<ErrorPage/>}/> */}
      </Routes>
    </div>
    </BrowserRouter>
    

  );
}

export default App;
