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
import Input from "../components/input";

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
      <Text style={styles.title}>Digite seu CEP</Text>
      <Input
        placeholder={"Digite seu CEP"}
        onChangeText={(cep) => setCep(cep)}
        value={cep}
      />
      <TouchableOpacity style={styles.buttonBuscar} onPress={buscarCep}>
        <Text style={{ color: "#1C1C1C" }}>BUSCAR</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1C1C1C",
  },
  title: {
    flex: 0.25,
    fontSize: 30,
    color: "purple",
    fontWeight: "bold",
  },
  buttonBuscar: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "purple",
    backgroundColor: "purple",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    shadowOpacity: 0.2,
  },
});

export default Home;
