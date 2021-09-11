import { Divider, HStack, Text, useTheme, VStack } from "native-base";
import React from "react";

const Content = () => {
  const { colors } = useTheme();
  const { gray } = colors;
  return (
    <VStack bg={gray[100]} p={6}>
      <HStack space={3}>
        <Text color={gray[400]}>Email: </Text>
        <Text>johnatan.doeland@gmail.com</Text>
      </HStack>
      <Divider my={4} bg={gray[300]} />
      <HStack space={3}>
        <Text color={gray[400]}>Phone: </Text>
        <Text>+371 2341 8765</Text>
      </HStack>
      <Divider my={4} bg={gray[300]} />
      <VStack space={3}>
        <Text color={gray[400]}>About: </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A quam culpa
          dolorem ex, eum unde molestiae adipisci nulla iure suscipit. Dolorum
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aliquam
          sunt nostrum eligendi, iste inventore quisquam similique aut numquam.
          Ducimus blanditiis optio et debitis sint dicta, iusto molestiae
          accusantium, quibusdam, est mollitia. Tempore corporis repellendus
          nulla praesentium ratione amet, ipsa excepturi error dolores quidem.
          Accusamus sunt error deleniti? Quia, quis.
        </Text>
      </VStack>
    </VStack>
  );
};

export default Content;
