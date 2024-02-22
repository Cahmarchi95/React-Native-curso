import { SafeAreaView, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import firebase from "./src/FirebaseConnection";

export default function App() {
  const [nome, setNome] = useState("Carregando...");
  const [idade, setIdade] = useState("");

  useEffect(() => {
    async function Dados() {
      await firebase
        .database()
        .ref("usuarios/2")
        .on("value", (snapshot) => {
          setNome(snapshot.val().nome);
          setIdade(snapshot.val().idade);
        });

      // await firebase
      //   .database()
      //   .ref("nome")
      //   .once("value", (snapshot) => {
      //     setNome(snapshot.val());
      //   });
    }

    Dados();
  }, []);

  return (
    <SafeAreaView style={{ marginTop: 25 }}>
      <Text style={{ fontSize: 25 }}>
        Olá {nome}, você tem {idade} anos
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
