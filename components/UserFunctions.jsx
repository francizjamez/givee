import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Fontisto from "react-native-vector-icons/Fontisto";
import { Box, Flex, useTheme, Circle } from "native-base";

const UserFunctions = () => {
  const { colors } = useTheme();
  const { gray } = colors;
  return (
    <Flex
      direction="row"
      justify="space-around"
      borderColor={gray[100]}
      borderTopWidth={2}
      py={1}
      pt={5}
    >
      <Ionicons name="call" size={35} color="#6cdd00" />
      <Box position="relative">
        <Ionicons name="chatbubble-ellipses" size={35} color="#354a54" />
        <Circle
          border={2}
          borderColor="white"
          size={4}
          position="absolute"
          bg="#ffad00"
          right={0}
          bottom={0}
        ></Circle>
      </Box>
      <Fontisto name="share" size={35} color="#354a54" />
    </Flex>
  );
};

export default UserFunctions;
