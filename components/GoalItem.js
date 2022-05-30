import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.listGoal}>
      <Pressable onPress={props.onDeleteItem.bind(this, props.id)} android_ripple style={({pressed})=> pressed && styles.pressedItems}>
        <Text style={styles.listTextGoal}> {props.text}</Text>
    </Pressable>
      </View>
  );
};

const styles = StyleSheet.create({
  listGoal: {
    borderWidth: 1,
    borderColor: "green",
    margin: 10,
  },
  listTextGoal: {
    color: 'white',
  },
  pressedItems: {
    opacity: 0.6,
  }
});

export default GoalItem;