import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import firebase from "./src/FirebaseConnection";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function cadastrar() {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((value) => {
        alert("Usuário cadastrado: " + value.user.email);
      })
      .catch((error) => {
        if (error.code === "auth/weak-password") {
          alert("Sua senha deve ter pelo menos 6 caracteres");
          return;
        }
        if (error.code === "auth/invalid-email") {
          alert("Email inválido");
          return;
        } else {
          alert("Ops algo deu errado!");
          return;
        }
      });

    Keyboard.dismiss();
    setEmail("");
    setPassword("");
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.texto}>Email</Text>
      <TextInput
        placeholder="Digite seu email"
        style={styles.areaInput}
        underlineColorAndroid="transparent"
        onChangeText={(texto) => setEmail(texto)}
        value={email}
      />
      <Text style={styles.texto}>Senha</Text>
      <TextInput
        placeholder="Digite sua senha"
        style={styles.areaInput}
        underlineColorAndroid="transparent"
        onChangeText={(texto) => setPassword(texto)}
        value={password}
      />
      <Button title="Cadastrar" onPress={cadastrar} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    margin: 10,
  },

  texto: {
    fontSize: 20,
  },

  areaInput: {
    borderColor: "#121212",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    height: 45,
    fontSize: 17,
  },
});
