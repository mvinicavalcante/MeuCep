import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Alert,
  TextInput,
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
      console.log(response.data);
      navigation.navigate("CepDetailsScreen", { cepData: response.data }); // Corrigir o nome da tela aqui
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={"Digite seu CEP"}
        onChangeText={(cep) => setCep(cep)} // Utilize a prop onChangeText para atualizar o valor do input
        value={cep} // Utilize a prop value para definir o valor do input
      />
      <TouchableOpacity style={styles.buttonBuscar} onPress={buscarCep}>
        <View>
          <Text>Buscar</Text>
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
    alignItems: "center",
    marginTop: 10,
  },
  buttonBuscar: {
    width: "20%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderColor: "green",
    color: "green",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "80%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "green",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
});

export default Home;
