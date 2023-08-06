import { TextInput, StyleSheet } from "react-native";

const Input = ({ placeholder, onChangeText, value }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      placeholderTextColor={"purple"}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "80%",
    height: 70,
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
});

export default Input;
