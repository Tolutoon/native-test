import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Register = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onChangeUsername = (text) => setUsername(text);
  const onChangeEmail = (text) => setEmail(text);
  const onChangePassword = (text) => setPassword(text);
  const onChangeConfirmPassword = (text) => setConfirmPassword(text);

  const handleRegister = () => {
    if (!username || !email || !password || !confirmPassword) {
      alert("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    fetch("https://vee-commerce.cyclic.app/user/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: username,
        lastName: username,
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
        if (json && json.statusCode === "success") {
            alert("Registration successful. You can now log in.");
            navigation.navigate("Login");
          } else {
            alert("Registration successful. You can now log in.");
          }
        })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.reg}>Register to start exploring</Text>
        <View style={styles.form}>
          <TextInput
            placeholder="Username"
            style={styles.input}
            value={username}
            onChangeText={onChangeUsername}
          />
          <TextInput
            placeholder="Email"
            style={styles.input}
            value={email}
            onChangeText={onChangeEmail}
          />
          <TextInput
            placeholder="Password"
            style={styles.input}
            value={password}
            onChangeText={onChangePassword}
            secureTextEntry
          />
          <TextInput
            placeholder="Confirm Password"
            style={styles.input}
            value={confirmPassword}
            onChangeText={onChangeConfirmPassword}
            secureTextEntry
          />
          <TouchableOpacity style={styles.btnLog} onPress={handleRegister}>
            <Text style={styles.btnText}>Register</Text>
          </TouchableOpacity>
        </View>
        <Text onPress={() => navigation.navigate("Login")} style={styles.loginNow}>
          Already have an account? Login Now
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  reg: {
    fontSize: 30,
    marginBottom: 20,
  },
  form: {},
  input: {
    padding: 12,
    marginTop: 20,
    backgroundColor: "#d9d9d9",
    marginBottom: 20,
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
  },
  loginNow: {
    alignSelf: "center",
  },
});

export default Register;
