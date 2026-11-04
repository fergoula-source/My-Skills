import { useState } from "react"
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Button } from "../../components/Button"

interface SkillData {
  id: number
  name: string
}

export function Home() {
  const [newSkill, setNewSkill] = useState("")
  const [mySkills, setMySkills] = useState<SkillData[]>([])

  function handleAddNewSkill() {
    const skillData: SkillData = {
      id: new Date().getTime(),
      name: newSkill,
    }

    setMySkills((oldState) => [...oldState, skillData])
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, Fernando.</Text>

      <TextInput
        style={styles.input}
        placeholder="Write your skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
        value={newSkill}
      />

      <Button onPress={handleAddNewSkill} />

      {mySkills.map((skill) => (
        <TouchableOpacity key={skill.id} style={styles.skillButton}>
          <Text style={styles.skillText}>{skill.name}</Text>
        </TouchableOpacity>
      ))}
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
  input: {
    backgroundColor: "#1f1e25",
    color: "#fff",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 20,
    marginTop: 30,
    borderRadius: 7,
  },
  skillButton: {
    backgroundColor: "#1f1e25",
    padding: 15,
    borderRadius: 7,
    marginTop: 12,
    alignItems: "center",
  },
  skillText: {
    color: "#fff",
    fontSize: 17,
  },
})
