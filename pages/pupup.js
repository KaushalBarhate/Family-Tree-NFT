import { Button } from "@chakra-ui/button";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useState } from "react";
// var show=fa/
// function  handleModal(){  
//   show=!show
// }  
function newsubmit() {
  // document.getElementById("mint").click()
  console.log(1)
}
function polygonsubmit() {
  document.getElementById("polygonmint").click()
}
function popup2(){
  const [show, setshow] = useState("");
  
  return (  
    <div>  
      <h2 align='center'>Example of Modal in Reactjs</h2>  
      <div className="modalClass">  
        <Button onClick={()=>handleModal()}>Click To Open Modal</Button>  
      </div>  
        
      <Modal show={show} onHide={()=>handleModal()}>  
        <Modal.Header closeButton>This is a Modal Heading</Modal.Header>  
        <Modal.Body>This is a Modal Body</Modal.Body>  
        <Modal.Footer>  
          <Button onClick={()=>handleModal()}>Close</Button>  
          <Button onClick={()=>handleModal()}>Save</Button>  
        </Modal.Footer>  
      </Modal>  
    </div>  
  ) 
}

export default popup2;