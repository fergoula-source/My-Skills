import { StyleSheet, Text, TouchableOpacity } from "react-native"

interface ButtonProps {
  onPress: () => void
}

export function Button({ onPress }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={onPress}>
      <Text style={styles.buttonText}>ADD</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#a370f7",
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 7,
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
})
