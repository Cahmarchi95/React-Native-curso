import { SafeAreaView, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import firebase from "./src/FirebaseConnection";

export default function App() {
  const [nome, setNome] = useState("Carregando...");
  const [idade, setIdade] = useState("");

  useEffect(() => {
    async function dados() {
      //criar um nó
      //await firebase.database().ref("tipo").set("Vendedor");
      //remover um nó
      //await firebase.database().ref("tipo").remove();
      //inserir dados dentro de um child
      // await firebase.database().ref("usuarios").child(3).set({
      //   nome: "José",
      //   cargo: "Programador",
      // });
      //atualizar somente uma propriedade
      //   await firebase.database().ref("usuarios").child(3).update({
      //     nome: "José Augusto",
      //   });
    }

    dados();
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
