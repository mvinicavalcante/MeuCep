import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CepDetailsScreen = ({ route }) => {
  const cepData = route.params?.cepData || null;

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, marginBottom: 20, textAlign: "center" }}>
        CEP Details Screen
      </Text>
      {cepData && (
        <View>
          <Text style={styles.info}>
            Logradouro:{" "}
            {cepData.logradouro ? cepData.logradouro : "Não informado"}
          </Text>
          <Text style={styles.info}>
            Bairro: {cepData.bairro ? cepData.bairro : "Não informado"}
          </Text>
          <Text style={styles.info}>
            Cidade: {cepData.localidade ? cepData.localidade : "Não informado"}
          </Text>
          <Text style={styles.info}>
            Estado: {cepData.uf ? cepData.uf : "Não informado"}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    marginTop: 10,
  },
  info: {
    width: "80%",
    height: 40,
    marginBottom: 15,
    fontSize: 15,
    borderWidth: 1,
    borderColor: "green",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
});

export default CepDetailsScreen;
