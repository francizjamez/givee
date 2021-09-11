import {
  Button,
  Center,
  Divider,
  Flex,
  HStack,
  Pressable,
  Text,
  useTheme,
  VStack,
} from "native-base";
import React, { useState } from "react";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";

const Nav = () => {
  const { colors } = useTheme();
  const { gray } = colors;

  const [selected, setSelected] = useState([false, false, true, false]);

  function select(index) {
    const newSelected = [false, false, false, false];
    newSelected[index] = true;
    setSelected(newSelected);
  }
  return (
    <>
      <Flex direction="row" position="absolute" bottom={0} bg="white">
        <Pressable
          p={2}
          flex={1}
          onPress={() => select(0)}
          borderTopWidth={2}
          borderColor={selected[0] ? "#ffad00" : "transparent"}
        >
          <VStack alignItems="center">
            <SimpleLineIcons
              name="location-pin"
              size={25}
              color={selected[0] ? "#ffad00" : "black"}
            />
            <Text color={selected[0] ? "#ffad00" : "black"}>Places</Text>
          </VStack>
        </Pressable>

        <Pressable
          p={2}
          flex={1}
          onPress={() => select(1)}
          borderTopWidth={2}
          borderColor={selected[1] ? "#ffad00" : "transparent"}
        >
          <VStack alignItems="center">
            <Entypo
              color={selected[1] ? "#ffad00" : "black"}
              name="price-tag"
              size={25}
            />
            <Text color={selected[1] ? "#ffad00" : "black"}>Discount</Text>
          </VStack>
        </Pressable>

        <Pressable
          p={2}
          flex={1}
          onPress={() => select(2)}
          borderTopWidth={2}
          borderColor={selected[2] ? "#ffad00" : "transparent"}
        >
          <VStack alignItems="center">
            <Ionicons
              color={selected[2] ? "#ffad00" : "black"}
              name="flag-outline"
              size={25}
            />
            <Text color={selected[2] ? "#ffad00" : "black"}>Guide</Text>
          </VStack>
        </Pressable>

        <Pressable
          p={2}
          flex={1}
          onPress={() => select(3)}
          borderTopWidth={2}
          borderColor={selected[3] ? "#ffad00" : "transparent"}
        >
          <VStack alignItems="center">
            <Feather
              color={selected[3] ? "#ffad00" : "black"}
              name="user"
              size={25}
            />
            <Text color={selected[3] ? "#ffad00" : "black"}>Profile</Text>
          </VStack>
        </Pressable>
      </Flex>
    </>
  );
};

export default Nav;
