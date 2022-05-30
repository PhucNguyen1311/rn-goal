import { useState } from "react";
import { FlatList, StyleSheet, View, Button, StatusBar } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [modelIsVisible, setModelIsVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  function startAddGoals() {
    setModelIsVisible(true);
  }
  function endAddGoals() {
    setModelIsVisible(false);
  }

  function addGoals(inputText) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: inputText, id: Math.random().toString() },
    ]);
    endAddGoals();
  }

  function deleteGoalsHandler(id) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar barStyle="light-content"/>
      <View style={styles.appContainer}>
        <Button
          title="Add new Goals"
          color="#731D1DDDd"
          onPress={startAddGoals}
        />
        <GoalInput
          visible={modelIsVisible}
          addGoals={addGoals}
          onCancel={endAddGoals}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDeleteItem={deleteGoalsHandler}
                  id={itemData.item.id}
                />
              );
              // keyExtractor if there is another value as key like ID
            }}
          ></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    backgroundColor: "#066174DD",
  },

  goalsContainer: {
    flex: 5,
  },
});
