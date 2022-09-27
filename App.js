import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisble, setModalIsVisible] = useState(false);
  function addGoalListener(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
    setModalIsVisible(false);
  }
  function isVisible() {
    setModalIsVisible(true);
  }
  function notVisible() {
    setModalIsVisible(false);
  }
  function deleteOnPress(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.key !== id);
    });
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button title="Add New Goal" color={"#9932cc"} onPress={isVisible} />
        <GoalInput
          onAddGoal={addGoalListener}
          visible={modalIsVisble}
          exit={notVisible}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDelete={deleteOnPress}
                  id={itemData.item.key}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
