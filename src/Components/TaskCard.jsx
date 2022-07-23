import { Badge, Box, Stack, Text } from "@chakra-ui/react";
import React from "react";

const TaskCard = ({
    title,
    description,
    tags,
    subTasks,
    coloScheme = "green",
}) => {

   
    return <Box>
        <Text>{title}</Text>
        <Box>
            <Stack>
                {
                    tags.length && tags.map((item, id) => {
                        return (
                            <Badge key={id} colorScheme={coloScheme}>{ item}</Badge>
                        );
                    })
                }
            </Stack>
        </Box>
        <Text>{ description}</Text>
    </Box>
}
export default TaskCard;
