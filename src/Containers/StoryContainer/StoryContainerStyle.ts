import { StyleSheet } from 'react-native';
export default function <C>() {
    return StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ffffff'
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 20,
        },
        optionsContainer: {
            marginTop: 20,
            flexDirection: 'row',
            flexWrap: 'wrap'
        },
    })
}