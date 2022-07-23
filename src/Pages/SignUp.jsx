import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Textarea,
} from "@chakra-ui/react";
import { useReducer, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import { singup } from "../Redux/AuthReducer/action";
import { SIGNUP_SUCCESS } from "../Redux/AuthReducer/actionType";

const initialState = {
  name: "",
  email: "",
  password: "",
  username: "",
  mobile: '',
  description: "",
};
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "name":
      return { ...state, name: payload };
    case "username":
      return { ...state, username: payload };
    case "email":
      return { ...state, email: payload };
    case "password":
      return { ...state, password: payload };
    case "mobile":
      return { ...state, mobile: payload };
    case "description":
      return { ...state, description: payload };
    default:
      return state;
  }
};


export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [state, setter] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const onClickHandler = () => {
    dispatch(singup(state)).then((res) =>
   {if (res===SIGNUP_SUCCESS) {
      navigate("/login")
   }}
    );
 }

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="Name" isRequired>
                  <FormLabel> Name</FormLabel>
                  <Input
                    type="text"
                    value={state.name}
                    onChange={(e) =>
                      setter({ type: "name", payload: e.target.value })
                    }
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="UserName" isRequired>
                  <FormLabel>User Name</FormLabel>
                  <Input
                    type="text"
                    value={state.username}
                    onChange={(e) =>
                      setter({ type: "username", payload: e.target.value })
                    }
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={state.email}
                onChange={(e) =>
                  setter({ type: "email", payload: e.target.value })
                }
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={state.password}
                  onChange={(e) =>
                    setter({ type: "password", payload: e.target.value })
                  }
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl id="mobile">
              <FormLabel>Mobile-Number</FormLabel>
              <Input
                type="text"
                value={state.mobile}
                onChange={(e) =>
                  setter({ type: "mobile", payload: e.target.value })
                }
              />
            </FormControl>
            <Textarea
              placeholder="Description..."
              value={state.description}
              onChange={(e) =>
                setter({ type: "description", payload: e.target.value })
              }
            />
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={onClickHandler}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <RouterLink color={"blue.400"} to="/login">
                  Login
                </RouterLink>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
