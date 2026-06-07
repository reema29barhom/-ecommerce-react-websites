
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";
import Navbar from "./componentes/Navbar";
import AuthProvider from './context/AuthContext';

function App() {


  return (
    <AuthProvider>
   <div className='app'>
    <Navbar/>
    <Routes>

      <Route path="/" element={ <Home/>}/>
     <Route path='/Auth'  element={<Auth/>}/>
      <Route path='/Checkout ' element={<Checkout/>}/>

    </Routes>

   </div> 
   </AuthProvider>
  );
}

export default App
