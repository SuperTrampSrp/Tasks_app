import { Button, FlatList, StyleSheet, TextInput, View } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [goals, setGoals] = useState([]);
  const[modalIsVisible, setModalIsVisible] = useState(false);

  const addBtnHandler = (goal) => {
    setGoals((currentGoals) => [...goals, {text: goal, id: Math.random().toString()}]);
    setModalIsVisible(false);
  }

  const onDeleteHandler = (id) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    })
  }
  const triggerModal= () => {
    setModalIsVisible(true)
  }
  console.log(goals)
  return (
    <View style={styles.container}>
      <Button color='green' title='Add Goal' onPress={triggerModal}/>
      <GoalInput addBtn = {addBtnHandler} visible = {modalIsVisible} closeModal = {() => setModalIsVisible(false)}/>
      <View style={styles.tasksContainer}>
        <FlatList data={goals}
          renderItem={(itemData) => {
            return <GoalItem deleteHandler = {onDeleteHandler} id = {itemData.item.id} text = {itemData.item.text}/>
          }}
          keyExtractor = {(item, index) => {
            return item.id;
          }}
          // alwaysBounceVertical = {false}
        >
              
      </FlatList>
    </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
 
  tasksContainer: {
    flex: 3,
  },
  
});
