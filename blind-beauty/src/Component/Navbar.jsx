import { Box, Input } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import {  NavLink } from "react-router-dom"
import React from "react"
import styles from "./bb.module.css"
import SignIn from "./SignIn"
import data from "../data.json"


function Navbar(){

    const [navdata,setNav]=useState([])
    const [navOps,setOps]=useState([])
    const [navLogos,setLogos]=useState([])

    useEffect(()=>
    {
        setNav(data.navbar)
        setOps(data.navOps)
        setLogos(data.navLogos)
       
    }
,[])

    return (<>
    <Box className={styles.mainiconBox} >
        <Box ><NavLink to="/" ><img width="100px" src="https://i.ibb.co/z2hqBwY/i1.png" alt="" /></NavLink></Box>

        <Box marginTop="30px"  ><Input width="400px" className={styles.Input} placeholder="Search" ></Input></Box>
        <Box className={styles.iconBox} >{navOps.map((el,i)=>
        <Box key={i} className={styles.iconBox}>
            <img width="40px" height="40px" src={el.img}   />
            <p>{el.title}</p>
        </Box>
        )}
        <SignIn></SignIn></Box>
        <Box className={styles.iconBox} >{navLogos.map((el,i)=><Box key={i} className={styles.iconBox} ><NavLink to={el.link} >
            <img width="40px" src={el.img}/></NavLink></Box>)}</Box>
    </Box>
    <Box className={styles.NavBox} >
    {navdata.map((el,i)=><NavLink key={i} className={styles.Navbar} to={el.link} >
        <Box>
            <p>{el.title}</p>
        </Box></NavLink>)}
    </Box>
    </>)
}

export default Navbar;