import { useEffect, useState } from "react"
import {
  Platform,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Button } from "../../components/Button"
import { SkillCard } from "../../components/SkillCard"

interface SkillData {
  id: number
  name: string
}

export function Home() {
  const [newSkill, setNewSkill] = useState("")
  const [mySkills, setMySkills] = useState<SkillData[]>([])
  const [greetings, setGreetings] = useState("")

  useEffect(() => {
    console.log("useEffect executado")
  }, [mySkills])

  useEffect(() => {
    const currentHour = new Date().getHours()

    if (currentHour < 12) {
      setGreetings("Good morning")
    } else if (currentHour < 18) {
      setGreetings("Good afternoon")
    } else {
      setGreetings("Good night")
    }
  }, [])

  function handleAddNewSkill() {
    const skillData: SkillData = {
      id: new Date().getTime(),
      name: newSkill,
    }

    setMySkills((oldState) => [...oldState, skillData])
  }

  function handleRemoveSkill(id: number) {
    setMySkills((oldState) => oldState.filter((skill) => skill.id !== id))
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, Fernando.</Text>
      <Text style={styles.greetings}>{greetings}</Text>

      <TextInput
        style={styles.input}
        placeholder="Write your skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
        value={newSkill}
      />

      <Button title="ADD" onPress={handleAddNewSkill} activeOpacity={0.5} />

      <FlatList
        data={mySkills}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <SkillCard
            name={item.name}
            activeOpacity={0.7}
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
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
  greetings: {
    color: "#fff",
  },
  input: {
    backgroundColor: "#1f1e25",
    color: "#fff",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 20,
    marginTop: 30,
    borderRadius: 7,
  },
})
