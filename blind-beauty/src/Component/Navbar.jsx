import { Box, Input } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import {  NavLink } from "react-router-dom"
import { again } from "../AllRoutes/Home"
import React from "react"
import styles from "./bb.module.css"


function Navbar(){

    const [navdata,setNav]=useState([])
    const [navOps,setOps]=useState([])
    const [navLogos,setLogos]=useState([])

    useEffect(()=>
    {
        again("navbar").then((res)=>setNav(res.data));
        again("navOps").then((res)=>setOps(res.data));
        again("navLogos").then((res)=>setLogos(res.data));
    }
,[])

    return (<>
    <Box className={styles.mainiconBox} >
        <Box ><NavLink to="/" ><img width="100px" src="https://i.ibb.co/z2hqBwY/i1.png" alt="" /></NavLink></Box>
        <Box marginTop="30px"  ><Input className={styles.Input} placeholder="Search" ></Input></Box>
        <Box className={styles.iconBox} >{navOps.map((el)=>
        <Box className={styles.iconBox}>
            <img width="40px" height="40px" src={el.img}   />
            <p>{el.title}</p>
        </Box>
        )}</Box>
        <Box className={styles.iconBox} >{navLogos.map((el)=><Box className={styles.iconBox} ><NavLink to={el.link} >
            <img width="30px" src={el.img}/></NavLink></Box>)}</Box>
    </Box>
    <Box className={styles.NavBox} >
    {navdata.map((el)=><NavLink className={styles.Navbar} to={el.link} >
        <Box>
            <p>{el.title}</p>
        </Box></NavLink>)}
    </Box>
    </>)
}

export default Navbar;