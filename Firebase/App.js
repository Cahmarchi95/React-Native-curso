import {
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import firebase from "./src/FirebaseConnection";
import Listagem from "./src/Listagem";

export default function App() {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    async function dados() {
      await firebase
        .database()
        .ref("usuarios")
        .on("value", (snapshot) => {
          setUsuarios([]);
          snapshot.forEach((childItem) => {
            let data = {
              key: childItem.key,
              nome: childItem.val().nome,
              cargo: childItem.val().cargo,
            };
            setUsuarios((oldArray) => [...oldArray, data]);
          });
        });
    }

    dados();
  }, []);

  async function cadastrar() {
    if ((nome !== "") & (cargo !== "")) {
      let usuarios = await firebase.database().ref("usuarios");
      let chave = usuarios.push().key;

      usuarios.child(chave).set({
        nome: nome,
        cargo: cargo,
      });

      alert("Cadastrado com sucesso!");
      setNome("");
      setCargo("");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.texto}>Nome</Text>
      <TextInput
        placeholder="Digite seu nome"
        style={styles.areaInput}
        underlineColorAndroid="transparent"
        onChangeText={(texto) => setNome(texto)}
        value={nome}
      />
      <Text style={styles.texto}>Cargo</Text>
      <TextInput
        placeholder="Digite seu cargo"
        style={styles.areaInput}
        underlineColorAndroid="transparent"
        onChangeText={(texto) => setCargo(texto)}
        value={cargo}
      />
      <Button title="Novo funcionário" onPress={cadastrar} />
      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <Listagem data={item} />}
      />
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
