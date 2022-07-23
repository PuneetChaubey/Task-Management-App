import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskCard from "../Components/TaskCard";
import { getTasks } from "../Redux/AppReducers/action";

const Homepage = () => {
  const tasks = useSelector((state) => state.AppReducers.tasks);
  const dispatch = useDispatch();
  useEffect(() => {
    if (tasks.length === 0) {
      dispatch(getTasks());
    }
  }, [tasks.length,dispatch]);

  return (
    <Box width="100%">
      <Flex justifyContent="space-around">
        <Box border="1px solid black" width="250px" height="95vh">
          <Text textAlign="center">Todo</Text>
          {tasks.length > 0 &&
            tasks
              .filter((item) => item.tasks_status === "todo")
              .map((item) => {
                return <TaskCard key={item.id} {...item} />;
              })}
        </Box>

        <Box border="1px solid black" width="250px" height="95vh">
          <Text textAlign="center">In-Progress</Text>
          {tasks.length > 0 &&
            tasks
              .filter((item) => item.tasks_status === "in-progress")
              .map((item) => {
                return <TaskCard key={item.id} {...item}  coloScheme="yellow"/>;
              })}
        </Box>

        <Box border="1px solid black" width="250px" height="95vh">
          <Text textAlign="center">Done</Text>
          {tasks.length > 0 &&
            tasks
              .filter((item) => item.tasks_status === "done")
              .map((item) => {
                return <TaskCard key={item.id} {...item} coloScheme="blue" />;
              })}
        </Box>
      </Flex>
    </Box>
  );
};

export default Homepage;
