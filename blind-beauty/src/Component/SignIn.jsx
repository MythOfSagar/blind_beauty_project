import React, { useContext } from "react";
import { ModalContent, useDisclosure,ModalHeader} from "@chakra-ui/react";
import { useState } from "react";
import { Button, Box , Input } from '@chakra-ui/react'
import {Modal,ModalBody} from "@chakra-ui/react"
import styles from "./bb.module.css"
import { AuthContext } from "./Context";

const SignIn = () => {

    const{authState ,loginUser,logoutUser}=useContext(AuthContext)
  const finalRef = React.useRef(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const emptyForm={
    email:"",
    password:""
}

const [formData,setFormData]=useState(emptyForm)

const handleChange=(e)=>{
 const {name,value}=e.target
setFormData({...formData,[name]:value})
}


const handleSubmit=(e)=>{
 e.preventDefault()
console.log(formData)
loginUser(formData.email)
}


  return (
    <>
      <Button marginTop="10px" colorScheme="white" onClick={onOpen}>
      <Box className={styles.iconBox}>
            <img width="40px" height="40px" src="https://i.ibb.co/5BSWGH4/i1.png" />
            <p style={{color:"black"}} >{authState.isAuth ? authState.email : "Sign In"}</p>
        </Box>
        </Button>
      <Modal size="xl" isOpen={isOpen} onClose={onClose} finalFocusRef={finalRef} >
      
        <ModalBody >
              <ModalContent>
              <ModalHeader>Sign In</ModalHeader>
              <p style={{marginLeft:"20px"}} >Sign in or create an account to enjoy FREE Standard Shipping on all orders.</p>
          <Input type="email" placeholder="Email Address*" name="email" value={formData.email} onChange={handleChange} required/>
          <Input marginTop="50px" name="password" placeholder="Password*" value={formData.password} onChange={handleChange} required/>
          <Button marginTop="50px" width="250px" borderRadius="30px" onClick={handleSubmit} colorScheme="red" >Sign In</Button>
          </ModalContent>
        </ModalBody>
      </Modal>
    </>
  );
};

export default SignIn;