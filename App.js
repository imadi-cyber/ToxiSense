import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Analyze from "./Pages/Analyze/Analyze";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Analyze" element={<Analyze/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
