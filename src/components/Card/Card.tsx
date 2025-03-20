import { Flex, Input, Text } from "@chakra-ui/react";
import React from "react";
import Button from "../Button/Button";
import { login } from "../../services/login/login";


// interface ICard {
//   id: number;
//   title: string;
//   paragraph: string;
//   details: string;
// }
const Card = () => {
  return (
    <Flex
      minHeight={"calc(100vh - 10rem)"}
      backgroundColor={"#e7e3e2"}
      padding={"1.5rem"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Flex
        direction={"column"}
        justifyContent={"center"}
        align={"center"}
        backgroundColor={"#FFFFFF"}
        color={"black"}
        borderRadius={"1.5rem"}
        padding={".8rem"}
        gap={"1rem"}
        width={'60%'}
        justifySelf={"center"}
        height={'300px'}
      >
        <Text fontSize={"2rem"} fontFamily={""} fontWeight={"400"}>
          Faça o Login
        </Text>
        <Input
          placeholder="Email"
          type="email"
          border={"1px solid #a6cfe8"}
          padding={"0 1rem"}
        />
        <Input
          placeholder="Senha"
          type="senha"
          border={"1px solid #a6cfe8"}
          padding={"0 1rem"}
        />
        <Button text="Entrar" onClick={login}/>
      </Flex>
    </Flex>
  );
};

export default Card;
