import { TextInput, StyleSheet } from "react-native";

const input = ({ placeholder }) => {
  return <TextInput style={styles.input} placeholder={placeholder} />;
};

const styles = StyleSheet.create({
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

export default input;
