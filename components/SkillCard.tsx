import {
  StyleSheet,
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
} from "react-native"

interface SkillCardProps extends TouchableOpacityProps {
  name: string
}

export function SkillCard({ name, ...rest }: SkillCardProps) {
  return (
    <TouchableOpacity style={styles.skillButton} {...rest}>
      <Text style={styles.skillText}>{name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
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
