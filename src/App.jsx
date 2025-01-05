import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navigation/Navbar"
import Home from "./pages/Home"
import Footer from "./components/footer/Footer"


function App() {
 

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} >Home</Route>
        <Route path='/nft' >NFT</Route>
        <Route path='/crypto' >Crypto</Route>
        <Route path='/aboutUs' >AboutUs</Route>
        <Route path='/ourTeam' >OurTeam</Route>
        <Route path='/contactUs' >ContactUs</Route>
       
      </Routes>
      <Footer/>
      
      </BrowserRouter>
    </>
  )

}

export default App
