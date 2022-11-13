import { Box, Grid, Image, } from "@chakra-ui/react"
import styles from "./bb.module.css"
import BasicModal from "./OpenModal"


function SingleElement({arr}){

    

    return <Box className={styles.MainJustDrop} >
        <Grid templateColumns="repeat(6,1fr)" >
    {arr.map((el,i)=>(<Box  className={styles.justdrop} key={i}>
        <Box><Image src={el.img} ></Image></Box>
        <Box><BasicModal
        img={el.img}
        
        subtitle={el.subtitle}
        title={el.title}
        details={el.details}
        price={el.price}
        
        ></BasicModal></Box>
        <Box style={{marginTop:"-25px"}}>
            <h4 className={styles.justdroptitle} >{el.title}</h4>
            <p>{el.subtitle}</p>
        </Box>
    </Box>))}
    </Grid>
</Box>
}

export default SingleElement;