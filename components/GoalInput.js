import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native'

const GoalInput = (props) => {
    const [goal, setGoal] = useState('');
    const inputTextHandler = (text) => {
        setGoal(text);
    }
    const addGoalHandler = () => {
        props.addBtn(goal);
        setGoal('');
    }
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/goal.png')} />
                <TextInput style={styles.inputText} value={goal} placeholder='Add your goal' onChangeText={inputTextHandler} />

                <View style={styles.btnContainer}>
                    <View style={styles.button}>
                        <Button title='Add' onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.closeModal} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4514cc'
    },
    inputText: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius:10,

        width: '70%',
        marginRight: 8,
        padding: 16,

    },
    btnContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    button: {
        margin: 8,
        width: 100
    },
    image: {
        width: 100,
        height: 100,
        margin: 8
    }
})