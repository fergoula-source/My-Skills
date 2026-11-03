import { StyleSheet, Text, View } from "react-native"

export function Home() {
  return (
    <>
      <View style={styles.container}>
        <Text>React Native</Text>
      </View>

      <Text style={styles.text}>Unicruz</Text>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    alignSelf: "center",
    marginBottom: 20,
  },
})
