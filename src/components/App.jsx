import '../styles/App.css';
import Character from '../pages/Character';
import Home from '../pages/Home';
import NavBar from './NavBar';
import { Route, Routes } from 'react-router-dom';
import Episode from '../pages/Episode';
import Login from './Login';

 
  function App() {
    const texto = 'Intento de web nº2';
    return (
    <>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home>{texto}</Home>}></Route>
      <Route path="/character" element={<Character />}></Route>
      <Route path="/episode" element={<Episode />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      </Routes>
      </>
    );
  };

export default App
