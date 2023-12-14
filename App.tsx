import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Usuario"
        onChangeText={setUser}
        value={user}
        style={styles.inputs}
      ></TextInput>
      <TextInput
        placeholder="Senha"
        onChangeText={setPassword}
        value={password}
        style={styles.inputs}
      ></TextInput>
      {user.length > 0 && <Text>Voce digitou algo!!</Text>}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  inputs: {
    borderWidth: 1,
    borderColor: "black",
    margin: 2,
    width: "80%",
  },
});
