import { Box, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import SingleElement from "../Component/SingleElement";
import data from "../data.json"

function BU20(){

    const[arr,setArr]=useState([])
    const[mainData,setMain]=useState([])
   
    const handleClick=(e)=>{
        console.log(e.target.name)
        if(e.target.name==="crueltyFree"){
        setArr(mainData.filter((el)=>(el.crueltyFree===true)))
    }
    else if(e.target.name==="miniSize"){
        setArr(mainData.filter((el)=>(el.miniSize===true)))
    }
    else if(e.target.name==="luxuryBeauty"){
        setArr(mainData.filter((el)=>(el.luxuryBeauty===true)))
    }
    else if(e.target.name==="bestSellers"){
        setArr(mainData.filter((el)=>(el.bestSellers===true)))
    }
    }

useEffect(()=>{
        setArr(data.bu20)
        setMain(data.bu20)
       console.log(data)
},[])

    return <>
    <Navbar></Navbar>
    <Box>
        <Button onClick={handleClick} name="crueltyFree" >crueltyFree</Button>
        <Button onClick={handleClick} name="miniSize" >miniSize</Button>
        <Button onClick={handleClick} name="luxuryBeauty">luxuryBeauty</Button>
        <Button onClick={handleClick} name="bestSellers">bestSellers</Button>
    </Box>
    <Box>
        <SingleElement arr={arr} ></SingleElement>
    </Box></>

}
export default BU20;