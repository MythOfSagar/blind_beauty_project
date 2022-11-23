import { Box, Button, Image, } from "@chakra-ui/react"
import styles from "./bb.module.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import data from "../data.json"


function Slides(){

    const [slides,setSlides]=useState([])
    const [page,setPage]=useState(1)
    const [last,setLast]=useState(0)
    let limit=2

    useEffect(()=>{
        setSlides(data.slides)
        setLast(data.slides.length/limit)

    },[page])

    return (
        <><Button marginLeft="50px" border="4px" borderLeftRadius="50%" marginBottom="-600px"  colorScheme='blackAlpha'  variant="outline" onClick={()=>setPage(prev=>prev-1)} className={styles.pagebtn} disabled={page===1} >
        {"<"}
       </Button>
       <Button border="4px" borderEndRadius="50%" marginLeft="1250px" marginBottom="-600px" colorScheme='blackAlpha' variant="outline" onClick={()=>setPage(prev=>prev+1)} className={styles.pagebtn} disabled={page==last} >
        {">"}
       </Button>
        
    <Box className={styles.Mainslides}>
         
     {slides.map((el)=>(
        <Link to="/" >
        <Box>
            <Box><Image src={el.img} ></Image></Box>
            <Box className={styles.Textslides} >
                <h1 className={styles.TextslidesHead} >{el.title}</h1>
                <h1>{el.subtitle}</h1>
            </Box>
        </Box>
        </Link>
     ))}
    </Box></>)

}

export default Slides;