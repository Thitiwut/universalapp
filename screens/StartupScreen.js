import React from "react";
import {
  View,
  StyleSheet,
} from "react-native";

const StartupScreen = (props) => {

  return (
    <View style={styles.screen}>
      <Text>startup</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StartupScreen;
