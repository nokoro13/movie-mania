
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav from "./Nav";

import PageHome from './pages/PageHome';
import PageAbout from './pages/PageAbout';
import PageFavorites from './pages/PageFavorite';


function AppRouter() {

  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Nav />
        <main>
          <Routes>
            <Route path="/" exact element={<PageHome />} />
            <Route path="about" element={<PageAbout />} />
            <Route path='favorites' element={<PageFavorites />} />
          </Routes>
          
        </main>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;


