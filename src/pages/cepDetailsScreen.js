import React from "react";
import { View, Text, StyleSheet, Button, Linking } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

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
      <View style={{ marginTop: 30 }}>
        <Button title="Ver no Maps" onPress={goToMaps}>
          <Icon name="map-marker" size={20} color="green" />
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    height: "100%",
    backgroundColor: "#1C1C1C",
  },
  info: {
    width: "80%",
    height: "auto",
    margin: 12,
    fontSize: 20,
    fontStyle: "italic",
    shadowOpacity: 0.2,
    borderWidth: 1,
    borderColor: "purple",
    padding: 15,
    borderRadius: 10,
    backgroundColor: "transparent",
    color: "purple",
  },
  title: {
    fontSize: 25,
    color: "purple",
    fontWeight: "bold",
    textAlign: "center",
    padding: 20,
    marginBottom: 10,
  },
});

export default CepDetailsScreen;
