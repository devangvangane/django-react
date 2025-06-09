import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/About';
import Create from './components/Create';


function App() {


  return (
    <>
      <Routes>
        <Route path='' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
      </Routes>
    </>
  )
}

export default App
