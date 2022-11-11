import Navbar from "../Component/Navbar";
import axios from "axios";
import { useEffect } from "react";

export const again=(v)=>{
    return axios.get(`http://localhost:3001/${v}`)
}

function Home(){
 

    return <><Navbar></Navbar></>

}
export default Home;