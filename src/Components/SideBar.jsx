import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  
  return (
    <Box width="250px" border="1px solid red" height="100vh">
      <Stack direction="column">
        <Box height="15vh" border="1px solid blue">
          {" "}
        </Box>
        <Box height="70vh" border="1px solid blue">
          <Stack direction="column">
            <Box border="2px solid gray" height="50px" bg="#d6e8d5">
              <Flex justifyContent="space-between" padding="16px">
                <Text>All</Text>
                <Text>4</Text>
              </Flex>
            </Box>
            <Box border="1px solid gray" height="50px" bg="#dbe8fc">
              <Flex justifyContent="space-between" padding="16px">
                <Text>Personal</Text>
                <Text>4</Text>
              </Flex>
            </Box>
            <Box border="1px solid gray" height="50px" bg="#e1d4e7">
              <Flex justifyContent="space-between" padding="16px">
                <Text>Official</Text>
                <Text>4</Text>
              </Flex>
            </Box>
            <Box border="1px solid gray" height="50px" bg="#ffe6cc">
              <Flex justifyContent="space-between" padding="16px">
                <Text>Others</Text>
                <Text>4</Text>
              </Flex>
            </Box>
          </Stack>
        </Box>
        <Box height="10vh" border="1px solid blue">
          <Button width="100%">{isAuth ? "Logout" : ""}</Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default SideBar;
