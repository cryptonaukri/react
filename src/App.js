import './App.css';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';

function App() {

    // data is state

  return (
    <div className='App'>
        <Navbar/>
      
      {/* In version above 6 of react-router-dom we need to add extra tag routes*/}
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/user" element={<Users/>}/>
      </Routes>        
      
       
    </div>
  );
}

export default App;
