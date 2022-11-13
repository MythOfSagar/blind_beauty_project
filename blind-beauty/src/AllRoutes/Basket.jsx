import { Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../Component/Context";
import Navbar from "../Component/Navbar";

function Basket(){

    const {isAuth}=useContext(AuthContext)


    return <>
    <Navbar></Navbar>
    <Heading>My Basket</Heading></>


}
export default Basket;