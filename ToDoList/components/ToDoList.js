import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask';

const ToDoList = ({ initialValues }) => {
    const [items, setItems] = useState(initialValues.map((value) => ({ id: uuidv4(), title: value })));

    const addToDo = (newTitle) => {
        const newItem = { id: uuidv4(), title: newTitle };
        setItems((prevItems) => [...prevItems, newItem]);
    };

    const removeToDo = (id) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    return (
        <View style={styles.container}>
          {items.map((item) => (
            <View key={item.id}>
              <Text style={styles.text}>ToDo item: {item.title}</Text>
              <View style={styles.buttonContainer}>
                <Button title="Remove" onPress={() => removeToDo(item.id)} />
              </View>
            </View>
          ))}
          {/* <AddTask onAddTask={addToDo} /> */}
        </View>
    );

};

ToDoList.defaultProps = {
    initialValues: [],
};

const styles = StyleSheet.create({
    todoListContainer: {
      margin: 10,
    },
    todoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
    },
});

export default ToDoList;