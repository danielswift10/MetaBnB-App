import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Metabnb from './pages/Airbnb/components/Metabnb/Metabnb';
import './App.css';
import Venues from './pages/PlaceToStay/components/Venues/Venues';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/'  element={<Metabnb/>}/>
        <Route path='/place-to-stay'  element={<Venues/>}/>
        {/* <Route path='*'  element={<ErrorPage/>}/> */}
      </Routes>
    </div>
    </BrowserRouter>
    

  );
}

export default App;
