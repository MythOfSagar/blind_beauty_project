import Navbar from "../Component/Navbar";
import axios from "axios";
import { useEffect } from "react";
import JustDropped from "../Component/JustDropped";
import Slides from "../Component/Slides";


export const again=(v,params={})=>{
    return axios.get(`http://localhost:3001/${v}`,{params:{
        _page:params.page,
        _limit:params.limit
    }})
}



function Home(){


    return <>
    <Navbar></Navbar>
    <Slides></Slides>
    <JustDropped></JustDropped>
    </>

}
export default Home;