import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
    Keyboard,
} from "react-native";
import TaskBox from "./components/TaskBox";

const Tasks = () => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState(["Default Task"]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
    console.log(taskItems);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.ScrollView}>
        {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <TaskBox data={item} /> 
                </TouchableOpacity>
              )
            })
        }
      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTask}
      >
        <TextInput
          style={styles.textInput}
          placeholder={"Write A Task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181818",
    padding: 20,
    marginBottom: 20,
  },
  ScrollView: {
    flex: 1,
    marginBottom: 20,
  },
  writeTask: {
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    flex: 0.95,
    height: 40,
    borderRadius: 5,
    backgroundColor: "#3a3a3a",
    color: "white",
    paddingLeft: 10,
    fontSize: 20,
    borderWidth: 1,
    borderColor: "#efffae",
  },
  addWrapper: {
    width: 40,
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  addText: {
    fontSize: 20,
  },
});
