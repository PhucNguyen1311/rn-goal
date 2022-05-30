import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";

function GoalInput(props) {
  const [inputText, setInputText] = useState("");

 function inputString(enteredText) {
   setInputText(enteredText);
 }

  function addGoals() {
    props.addGoals(inputText);
    setInputText('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="type something"
          onChangeText={inputString}
          value={inputText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.inputButton}>
            <Button title="Add goal" color="#13C531" onPress={addGoals} />
          </View>
          <View style={styles.inputButton}>
            <Button
              title="Cancel goal"
              color="#8A3F14"
              onPress={props.onCancel}
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
    flex : 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor : '#7F0CD633'
  },
  buttonContainer: {
    flexDirection : "row"
  },
  inputButton: {
    marginHorizontal: 4,
    width : '30%'
  },
  textInput: {
    borderWidth: 1,
    width: "90%",
    padding: 16,
    marginRight: 6,
    borderRadius : 22
  },
  image: {
    width: 100,
    height: 100
  }
});
