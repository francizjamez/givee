import {
  Box,
  Center,
  Heading,
  HStack,
  Image,
  Text,
  useTheme,
  VStack,
} from "native-base";
import React from "react";
import Avatar from "../avatar.jpg";
import AntIcon from "react-native-vector-icons/AntDesign";

const Profile = () => {
  const { colors } = useTheme();
  const { gray } = colors;
  return (
    <Center>
      <VStack space="xl">
        <Box
          alignSelf="center"
          border={3}
          borderColor={gray[100]}
          p={1}
          borderRadius={100}
        >
          <Image
            size="xl"
            borderRadius={100}
            source={Avatar}
            alt="Alternate Text"
          />
        </Box>
        <Box>
          <Heading size="lg">Johnathhan Doeland</Heading>
          <Center>
            <HStack alignItems="center" space={1}>
              <Text color={gray[300]}>Rating: </Text>
              <AntIcon color="#ffad00" size={28} name="staro" />
              <Text fontSize={26}>5,5</Text>
            </HStack>
          </Center>
        </Box>
      </VStack>
    </Center>
  );
};

export default Profile;
