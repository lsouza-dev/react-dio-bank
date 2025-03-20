import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";

interface IButton{
  text:string;
  onClick:() => void;
}

const Button = ({text,onClick}:IButton) => {
  return (
    <ChakraButton
      onClick={onClick}
      background={"#2a97da"}
      color={"white"}
      size={"xl"}
      width={"100%"}
    >
      {text}
    </ChakraButton>
  );
};

export default Button;
