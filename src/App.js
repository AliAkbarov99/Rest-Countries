import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Index'
import Home from './Pages/Home/Home'
import Country from './Pages/Country/Country'

function App() {
  return (
    <>
        <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:country" element={<Country />} />
      </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
