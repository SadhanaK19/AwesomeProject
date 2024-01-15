import { View, Button, Text, Image, ImageBackground } from 'react-native';
import createToBeImplementedStyle from "../WelcomeContainer/WelcomeContainerStyle";

const WelcomeContainer = ({ navigation }: any) => {
    const styles = createToBeImplementedStyle();
    const startStory = () => {
        navigation.navigate("Character");
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../Assets/Welcome/enchanted_forest.jpg')} resizeMode="cover" style={styles.image}>
                <Text style={styles.title}>The Enchanted Forest</Text>
                <Button title="Start Story" onPress={startStory} />
            </ImageBackground>
        </View>
    )
}

export default WelcomeContainer