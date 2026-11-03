import { StyleSheet, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, Fernando.</Text>

      {/* <Text style={styles.textFooter}>Unicruz</Text> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  textFooter: {
    color: "#fff",
  },
})
