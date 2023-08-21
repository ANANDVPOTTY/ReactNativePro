import { useState } from "react";

import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
  Text,
} from "react-native";

import goalImg from "../assets/Images/goal.png";
import { LinearGradient } from "expo-linear-gradient";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <>
      <Modal visible={props.visible} animationType="fade" transparent={true}>
        <View style={styles.inputContainer}>
          <LinearGradient
            colors={["#3a4750", "#303841"]}
            style={styles.gradientContainer}
          >
            <Image source={goalImg} style={styles.image} />
            {/*  */}
            <TextInput
              style={styles.textInput}
              placeholder="Your Goals"
              onChangeText={goalInputHandler}
              value={enteredGoalText}
            />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button
                  title="Add Goal"
                  onPress={addGoalHandler}
                  color="black"
                />
              </View>

              <View style={styles.button}>
                <Button
                  title="Cancel"
                  onPress={props.onCancel}
                  color="#be3144"
                />
              </View>
            </View>
          </LinearGradient>
        </View>
      </Modal>
    </>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  gradientContainer: {
    width: "90%",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    borderRadius: 10,
  },

  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },

  image: {
    width: 100,
    height: 100,
    margin: 20,
  },

  textInput: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "gray",
    backgroundColor: "white",
  },

  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },

  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
