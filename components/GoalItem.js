import { StyleSheet, View, Text, Pressable } from "react-native";
function GoalItem(props) {
  return (
    <View style={styles.courseGoalContainer}>
      <Pressable
        android_ripple={{ color: "#3f1752" }}
        onPress={props.onDelete.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.courseText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}
export default GoalItem;
const styles = StyleSheet.create({
  courseGoalContainer: {
    margin: 8,
    backgroundColor: "#9932cc",
    borderRadius: 6,
  },
  courseText: {
    color: "white",
    fontSize: 16,
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
