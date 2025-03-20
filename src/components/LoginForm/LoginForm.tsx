import { Flex, Input, Text,Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import { login } from "../../services/login/login";
import { api } from "../../api";
import {UserData} from '../../classes/User'

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userData, setUserData] = useState< null | UserData >();

  useEffect(() => {
    const getData = async () => {
      const response: any|UserData = await api;
      if (response) setUserData(response);
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
      {userData ? <>
        <Text fontSize={"2rem"} fontFamily={""} fontWeight={"400"}>
          Faça o Login
        </Text>
        <Input
          placeholder="Email"
          type="email"
          border={"1px solid #a6cfe8"}
          padding={"0 1rem"}
          value={ email}
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
      </> : <Spinner size={'lg'}></Spinner>}
      </Flex>
    </Flex>
  );
};

export default LoginForm;
