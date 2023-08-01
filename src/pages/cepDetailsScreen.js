import React from "react";
import { View, Text, StyleSheet, Button, Linking } from "react-native";

const CepDetailsScreen = ({ route }) => {
  const cepData = route.params?.cepData || null;

  function goToMaps() {
    if (cepData) {
      let url;
      if (cepData.logradouro && cepData.bairro) {
        url = `https://www.google.com/maps/search/?api=1&query=${cepData.logradouro},${cepData.bairro}`;
      } else {
        url = `https://www.google.com/maps/search/?api=1&query=${cepData.localidade}, ${cepData.uf}`;
      }
      Linking.openURL(url).catch((error) =>
        console.error("Error opening maps:", error)
      );
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{cepData.localidade}</Text>
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
            Estado: {cepData.uf ? cepData.uf : "Não informado"}
          </Text>
        </View>
      )}
      <View>
        <Button title="Ver no Maps" onPress={goToMaps} />
      </View>
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
  title: {
    fontSize: 25,
    color: "green",
    textAlign: "center",
    padding: 20,
    marginBottom: 10,
  },
});

export default CepDetailsScreen;
