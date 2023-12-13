import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Button,
} from "react-native";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (text) => setEmail(text);
  const onChangePassword = (text) => setPassword(text);

  const handleSubmit = () => {
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    fetch("https://vee-commerce.cyclic.app/user/signIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
    .then((response) => {
        console.log("Status Code:", response.status);
        return response.json();
      })
      .then((json) => {
        console.log("Response JSON:", json);
        if (json.status === 201) {
          navigation.navigate("DummyScreen");
        } else {
          alert("Invalid email or password");
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>
          Welcome back! We've {" \n"}missed your presence here
        </Text>
        <View style={styles.form}>
          <TextInput
            editable
            placeholder="Enter your email"
            style={styles.email}
            value={email}
            onChangeText={onChangeEmail}
          />
          <TextInput
            editable
            placeholder="Enter your Password"
            style={styles.password}
            value={password}
            onChangeText={onChangePassword}
            secureTextEntry
          />
          <Button
            title="Forgot Password?"
            color="black"
            onPress={() => navigation.navigate("Forgot")}
          />
        </View>
        <TouchableOpacity style={styles.btnLog} onPress={handleSubmit}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
        <View style={{ marginBottom: 340 }}>
          <Text style={{ alignSelf: "center" }}>Or Login With</Text>
        </View>
        <Text style={{ alignSelf: "center" }}>
          Don’t have an account? Register Now
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 20,
  },
  welcomeText: {
    fontSize: 32,
  },
  btnLog: {
    width: 331,
    height: 56,
    backgroundColor: "#1E232C",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    alignSelf: "center",
    marginBottom: 20,
  },
  btnText: {
    color: "white",
    fontSize: 16,
  },
  email: {
    padding: 30,
    marginTop: 20,
    backgroundColor: "#d9d9d9",
    marginBottom: 20,
  },
  password: {
    padding: 30,
    backgroundColor: "#d9d9d9",
    marginBottom: 20,
  },
  form: {
    marginBottom: 30,
  },
});

export default Login;
