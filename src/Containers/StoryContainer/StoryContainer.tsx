import { useEffect } from 'react';
import { useState } from 'react';
import { View, Button, Text, TextInput, TouchableOpacity } from 'react-native';
import createToBeImplementedStyle from "../StoryContainer/StoryContainerStyle";

import axios from 'axios';

const StoryContainer = ({ route, navigation }: any) => {
  const [currentScene, setCurrentScene] = useState('start');
  const [storyData, setStoryData] = useState(null);


  useEffect(() => {
    fetch("http://localhost:3000/data", {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",
      }
    }).then(response => {
       return response.json();
    }).then(result=>{
      result.data[0].start.text = route.params.character.name + result.data[0].start.text 
      console.log(result)
      console.log(result.data[0])
      setStoryData(result.data[0])
    }).catch(error=>{
      console.log(error)
    })
  }, [])




  const handleOptionPress = (nextScene: any) => {
    setCurrentScene(nextScene);
  };
  const styles = createToBeImplementedStyle();
  if(storyData ===null){
    return (<View style={styles.container}></View>)
  }
  return (

    <View style={styles.container}>
      <Text style={styles.title}>The Enchanted Forest</Text>
      <Text style={{ color: route.params.character.colorCode }}>{storyData[currentScene]?.text}</Text>
      <View style={styles.optionsContainer}>
        {storyData[currentScene]?.options.map((option: any, index: any) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleOptionPress(option.nextScene)}
            style={{
              backgroundColor: '#2196f3',
              padding: 10,
              borderRadius: 5,
              marginHorizontal: 10,
              marginVertical: 10
            }}
          >
            <Text>{option.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

export default StoryContainer