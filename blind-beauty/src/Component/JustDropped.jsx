import { Box, Button, Heading, Image, } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { again } from "../AllRoutes/Home"
import styles from "./bb.module.css"
import BasicModal from "./OpenModal"
import SingleElement from "./SingleElement"


function JustDropped(){

    const [arr,setArr]=useState([])
    const [page,setPage]=useState(1)
    const [last,setLast]=useState(0)
    let limit=6

    useEffect(()=>{
        again("just-dropped",{page:page,limit:limit}).then((res)=>setArr(res.data))
        again("just-dropped").then((res)=>{
            setLast(res.data.length/limit)
        })
    },[page])
    
     
    return(<>
    <Button border="4px" marginBottom="-250px" borderLeftRadius="50%"  colorScheme='blackAlpha'  variant="outline" onClick={()=>setPage(prev=>prev-1)} className={styles.pagebtn} disabled={page===1} >
     {"<"}
    </Button>
    <Button border="4px" marginLeft="1270px" marginBottom="-250px" borderEndRadius="50%" colorScheme='blackAlpha' variant="outline" onClick={()=>setPage(prev=>prev+1)} className={styles.pagebtn} disabled={page==last} >
     {">"}
    </Button>
    <SingleElement arr={arr} ></SingleElement>
    </>)

}

export default JustDropped