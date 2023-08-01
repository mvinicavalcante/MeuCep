import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Alert,
  TextInput,
  Image,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";

import Api from "../services/api";

const Home = () => {
  const navigation = useNavigation();
  const [cep, setCep] = useState(""); // Estado para armazenar o CEP digitado

  async function buscarCep() {
    if (cep === "" || cep.length !== 8) {
      return Alert.alert("Digite um CEP válido");
    }
    try {
      const response = await Api.get(`${cep}/json/`);
      navigation.navigate("CepDetailsScreen", { cepData: response.data }); // Corrigir o nome da tela aqui
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Digite seu CEP</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder={"Digite seu CEP"}
        onChangeText={(cep) => setCep(cep)} // Utilize a prop onChangeText para atualizar o valor do input
        value={cep} // Utilize a prop value para definir o valor do input
      />
      <TouchableOpacity style={styles.buttonBuscar} onPress={buscarCep}>
        <View>
          <Text style={{ color: "#fff" }}>BUSCAR</Text>
        </View>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 30,
    color: "green",
  },
  buttonBuscar: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "green",
    backgroundColor: "green",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    shadowOpacity: 0.2,
  },
  input: {
    width: "80%",
    height: 70,
    margin: 12,
    fontSize: 20,
    marginTop: -50,
    fontStyle: "italic",
    shadowOpacity: 0.2,
    borderWidth: 1,
    borderColor: "green",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    color: "green",
  },
});

export default Home;
