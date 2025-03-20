import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box height={20} backgroundColor={"#2A97DA"}>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Box marginLeft={100} height={"80px"}>
          <Flex justifyContent={"center"} alignItems={"center"}>
            <img width={'80px'}
              src="https://lh5.googleusercontent.com/proxy/Z-4qm-b1MSSRd3KYzTYMvsVffYE276jDwUcwZLY6QwJpJxBcuHr28E1RQx7jPaku8_nzY7X3Nio3UPxRrBKV3dcsdsdGKEIjnxiXPEmx6NOZckwInVa3vGl-ci7B5OQ5pAkbOG_T7ly3BDPJeibReu0uQJib"
              alt=""
            />
          </Flex>
        </Box>
        <Box marginRight={100}>
          <Text fontSize={'2rem'} fontWeight={'bold'} >DIO BANK</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
