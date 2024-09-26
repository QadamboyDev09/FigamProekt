import { Route, Routes } from "react-router-dom"
import Navbar from "../compnents/Navbar"
import Page1 from "../Pages/Page1"
import Page2 from "../Pages/Page2"
import Page3 from "../Pages/Page3"
import Page4 from "../Pages/Page4"
import { Footer } from "../compnents/Footer"

const Router =()=>{
    return <div>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Page1/>}/>
        <Route path='/page2' element={<Page2/>}/>
        <Route path='/page3' element={<Page3/>}/>
        <Route path='/page4' element={<Page4/>}/>
        </Routes>
        <Footer/>
    </div>
}
export default Router