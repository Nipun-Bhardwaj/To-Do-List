import {
  Image,
  Modal,
  View,
  Button,
  TextInput,
  StyleSheet,
} from "react-native";
import { useState } from "react";
function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function addTextListener(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalListener() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal
      visible={props.visible}
      statusBarTranslucent={true}
      animationType="slide"
    >
      <View style={styles.inputContainer}>
        <Image source={require("../assets/goal.png")} style={styles.image} />
        <TextInput
          style={styles.textInputContainer}
          placeholder="Enter Your Goals"
          onChangeText={addTextListener}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.exit} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={addGoalListener}
              color="#5e0acc"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default GoalInput;
const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b",
    flex: 1,
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    margin: 8,
  },
  textInputContainer: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderRadius: 6,
    width: "100%",
    color: "#120438",
  },
  buttonContainer: {
    flexDirection: "row",
    margin: 8,
  },
  button: {
    width: 100,
    marginHorizontal: 16,
  },
});
