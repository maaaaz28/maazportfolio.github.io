import { Routes, Route} from 'react-router-dom';
import './App.scss';
import FrontPage from './components/Frontpage/frontpage';
import Portfolio from './components/portfolio/portfolio';
import AboutMe from './components/About/AboutMe';
import ContactMe from './components/Contactme/ContactMe';
import Home from './components/Home/Home';
import MyWork from './components/work/Work'; 
import ImgApp from './components/imageSlider/app';
function App() {
 return(
    <div className="App"> 
  <Routes>
<Route path="/" element={<FrontPage/>} />
</Routes>
<Routes>
<Route path="/portfolio" element={<Portfolio/>} />
<Route path="/aboutme" element={<AboutMe/>} />
<Route path="/contactme" element={<ContactMe/>} />
<Route path="/work" element={<MyWork/>} />
<Route path="/imageslider" element={ <ImgApp/> } />  
</Routes>
    </div>
  );
}

export default App;
