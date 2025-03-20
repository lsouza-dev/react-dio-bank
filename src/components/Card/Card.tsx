import { Flex, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import { login } from "../../services/login/login";
import { api } from "../../api";
import {User} from '../../classes/User'

const Card = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      const userData = await api;
      if (userData) setData(userData);
    };

    getData();
  });

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
        width={"60%"}
        justifySelf={"center"}
        height={"300px"}
      >
        <Text fontSize={"2rem"} fontFamily={""} fontWeight={"400"}>
          Faça o Login
        </Text>
        {data && <Text>{data.name}</Text>}
        <Input
          placeholder="Email"
          type="email"
          border={"1px solid #a6cfe8"}
          padding={"0 1rem"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          border={"1px solid #a6cfe8"}
          padding={"0 1rem"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          text="Entrar"
          onClick={() => {
            login(email, password);
          }}
        />
      </Flex>
    </Flex>
  );
};

export default Card;
