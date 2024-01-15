import { useState } from 'react';
import { View, Button, Text, TextInput, Alert } from 'react-native';
import createToBeImplementedStyle from "../CharacterContainer/ChracterContainerstyle";
import { Picker } from '@react-native-picker/picker';

const CharacterContainer = ({ navigation }: any) => {
    const [characterInput, setCharacterInput] = useState();
    const [selectedLanguage, setSelectedLanguage] = useState();
    const styles = createToBeImplementedStyle();
    const beginStory = () => {
        if(characterInput === null || characterInput === undefined || characterInput ===""){
            Alert.alert("input field is missing");
        }
        else if(selectedLanguage === null || selectedLanguage === undefined || selectedLanguage ===""){
            Alert.alert("input color code is missing");
        }
        else{
            navigation.navigate("Story",{ character:{ name: characterInput, colorCode: selectedLanguage}})
        }
    }
    const onChangeText = (value: any) => {
        setCharacterInput(value);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Customize Your Character</Text>
            <View style={styles.inputView}>
                <View style={styles.inputLabelView}>
                    <Text style={styles.inputLabel}>Character Name:</Text>
                </View>
                <View style={styles.inputSubView}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={characterInput}
                    />
                </View>
            </View>
            <View style={styles.inputView}>
                <View style={styles.inputLabelView}>
                    <Text style={styles.inputLabel}>Color code:</Text>
                </View>
                <View style={styles.inputSubView}>
                    <Picker
                        selectedValue={selectedLanguage}
                        style={styles.pickerStyle}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedLanguage(itemValue)
                        }>
                        <Picker.Item
                            label="Red"
                            value="red"
                            style={styles.itemStyles.java}
                        />
                        <Picker.Item
                            label="Green"
                            value="green"
                            style={styles.itemStyles.js}
                        />
                        <Picker.Item
                            label="Blue"
                            value="blue"
                            style={styles.itemStyles.python}
                        />
                        <Picker.Item
                            label="Yellow"
                            value="yellow"
                            style={styles.itemStyles.csharp}
                        />
                        <Picker.Item
                            label="Pink"
                            value="pink"
                            style={styles.itemStyles.swift}
                        />
                    </Picker>
                </View>
            </View>
            <Button style={styles.beginButton} color="#2196F3" title="Begin" onPress={beginStory} />
        </View>
    )
}

export default CharacterContainer