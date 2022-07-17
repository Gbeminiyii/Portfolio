import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Portfolio from "./Components/Portfolio/Portfolio";
import Servicess from "./Components/Servicess/Servicess";
import { GlobalStyles } from "./GlobalStyles";


function App() {
  return (
    <>
        <GlobalStyles />
        
        <Home/>
        <Navbar/>
        <About/>
        <Servicess/>
        <Portfolio/>
        <Contact/>
    </>
  );
}

export default App;
