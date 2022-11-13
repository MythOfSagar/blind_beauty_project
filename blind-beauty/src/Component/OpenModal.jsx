
import { Modal,ModalBody,ModalOverlay,ModalHeader,ModalContent,ModalCloseButton,ModalFooter, Img, Heading, Select } from "@chakra-ui/react";
import { Button,Box } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import styles from "./bb.module.css"



function BasicModal({title,subtitle,details,price,img,handleClick,e}) {
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
      <>
        <Button colorScheme="blackAlpha" onClick={onOpen} className={styles.Quicklook} >Quicklook</Button>
        <Modal size="4xl" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent >
            <ModalCloseButton />
            <ModalBody className={styles.ModalBox} >
              <Box className={styles.ModalBox}>
                <Box><Img src={img}></Img></Box>
                <Box>
                  <Box>
                    <Heading>{title}</Heading>
                    <h1 className={styles.subtitle} >{subtitle}</h1>
                    <h1>{details}</h1>
                    </Box>
                    <Box>
                      <Box className={styles.price} >₹ {price}</Box>
                      <Box>
                      <Select>
  <option value="1">1</option>
  <option value='2'>2</option>
  <option value='3'>3</option>
  <option value='4'>4</option>
  <option value='5'>5</option>
</Select>
</Box>
                    </Box>
                </Box>
                </Box>
            </ModalBody>
            <ModalFooter>
              <Button onClick={()=>handleClick(e)} colorScheme="red">Add to Basket</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default BasicModal;