import React from "react";
import AppLoading from "expo-app-loading";
import {
  NativeBaseProvider,
  Box,
  StatusBar,
  VStack,
  ScrollView,
} from "native-base";
import { useFonts } from "expo-font";

import Profile from "./components/Profile";
import UserFunctions from "./components/UserFunctions";
import Options from "./components/Options";
import Nav from "./components/Nav";
import Content from "./components/Content";

function App() {
  let [fontsLoaded] = useFonts({
    "Heading-Font": require("./assets/Montserrat/Montserrat-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Box pb={16}>
      <ScrollView>
        <VStack p={4} space="xl">
          <Options />
          <Profile />
          <UserFunctions />
        </VStack>
        <Content />
      </ScrollView>
      <Nav />
      <StatusBar />
    </Box>
  );
}

export default function ProvidedApp() {
  return (
    <NativeBaseProvider>
      <App />
    </NativeBaseProvider>
  );
}

// const styles = StyleSheet.create({});
