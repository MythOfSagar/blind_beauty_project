import { Routes,Route } from "react-router-dom"
import Basket from "./Basket"
import BU20 from "./BU20"
import Home from "./Home"


function AllRoutes(){
    return (<Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/bu20" element={<BU20></BU20>} ></Route>
        <Route path="/basket" element={<Basket></Basket>} ></Route>
    </Routes>)

}

export default AllRoutes