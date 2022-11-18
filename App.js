import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import {} from "react-native-web";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, todo: "code" },
    { id: 2, todo: "cook" },
  ]);
  const [value, setValue] = useState("");

  const handleOnClick = () => {
    if (value === "") {
      return alert("please enter a value");
    }
    let id = todos.length === 0 ? 1 : todos[todos.length - 1].id + 1;
    setTodos([...todos, { todo: value, id: id }]);
    setValue("");
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          marginTop: "10%",
          fontSize: 24,
          color: "white",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Todolist
      </Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          multiline={true}
          placeholder={"Add task list..."}
          placeholderTextColor="white"
          onChangeText={(value) => setValue(value)}
          value={value}
        />
        <TouchableOpacity>
          <Text
            onPress={() => handleOnClick()}
            style={{ marginLeft: 15, color: "white", fontSize: 40 }}
          >
            +
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        {todos.map((item, index) => (
          <Text style={{ color: "white", fontSize: 15 }}>
            {item.id}. {item.todo}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#000",
  },
  textInput: {
    height: 20,
    flex: 1,
    minHeight: "7%",
    marginTop: "5%",
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    paddingLeft: 10,
  },

  textInputContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    borderColor: "rgb(222,222,222)",
    borderBottomWidth: 1,
    paddingRight: 10,
    paddingBottom: 5,
  },
});
