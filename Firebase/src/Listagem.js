import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Listagem({ data }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Nome: {data.nome} - Cargo: {data.cargo}{" "}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginTop: 10,
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#121212",
  },
  text: {
    color: "#FFF",
    fontSize: 17,
  },
});
