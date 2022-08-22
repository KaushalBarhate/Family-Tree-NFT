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

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (txt: string,txt2: string,txt3: string) => void;
};



const NodeModal2: React.FC<Props> = ({ isOpen, onClose, onSubmit }) => {
  const [txt, setTxt] = useState("");
  const [txt2, setTxt2] = useState("");
  const [txt3, setTxt3] = useState("");

  return (
    
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Enter Family Details</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Family Name</FormLabel>
            <Input
              value={txt}
              onChange={(event) => setTxt(event.target.value)}
            />
                 <FormLabel>Enter Eldest member name</FormLabel>
            <Input
              value={txt2}
              onChange={(event2) => setTxt2(event2.target.value)}
            />
                 <FormLabel>Enter Eldest member's spouse name</FormLabel>
            <Input
              value={txt3}
              onChange={(event2) => setTxt3(event2.target.value)}
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            color="blue.500"
            variant="solid"
            onClick={() => {onSubmit(txt,txt2,txt3)
              setTxt("");
              setTxt2("");
              setTxt3("");
            }}
            disabled={!txt && !txt2 }
          >
            Add
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default NodeModal2;
