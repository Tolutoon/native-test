import React from "react";
import {
  ImageBackground,
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const image = require("../assets/images/img.png");

const Welcome = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} style={styles.imgContainer}>
        <TouchableOpacity
          style={styles.btnLog}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnReg}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.btnText}>Register</Text>
        </TouchableOpacity>
        <View style={styles.centeredContent}>
          <Text>Continue as a guest</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgContainer: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    paddingBottom: 40,
  },
  centeredContent: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  btnLog: {
    width: 331,
    height: 56,
    backgroundColor: "#1E232C",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    alignSelf: "center",
  },
  btnReg: {
    width: 331,
    height: 56,
    color: "#1E232C",
    backgroundColor: "#FFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    alignSelf: "center",
    borderWidth: 2,
    marginTop: 5,
  },
  btnText: {
    color: "white",
    fontSize: 16,
  },
});

export default Welcome;
