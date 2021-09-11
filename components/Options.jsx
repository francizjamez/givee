import React from "react";

import GradientText from "./GradientText";
import { Flex, Icon, useTheme } from "native-base";
import { ArrowBackIcon } from "native-base";
import FaIcon from "react-native-vector-icons/FontAwesome";

const Options = () => {
  const { colors } = useTheme();
  const { gray } = colors;
  return (
    <Flex direction="row" align="center" justify="space-between">
      <ArrowBackIcon size="md" color={gray[400]} />
      <GradientText fontFamily="Heading-Font" fontSize="3xl">
        Givee
      </GradientText>
      <Icon as={<FaIcon name="trash-o" />} color={gray[300]} />
    </Flex>
  );
};

export default Options;
