import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ShoesList from './ShoesList';
import Shoe from './ShoeDetail';

function App(props) {
  if (props.shoes === undefined) {
    return null;
  }


  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="shoes">
            <Route path="" element={<ShoesList shoes={props.shoes} />} />
          </Route>
          <Route path=":shoeId" element={<Shoe shoes={props.shoes} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
