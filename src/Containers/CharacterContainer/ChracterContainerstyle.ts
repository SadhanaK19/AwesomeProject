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
            color: 'black',
        },
        beginButton: {
            backgroundColor: '#2196F3',
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 877
        },
        inputView: {
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingVertical: 20
        },
        inputLabelView: {
            width: '40%'
        },
        inputLabel: {
            fontSize: 16,
            color: 'black',
        },
        inputSubView: {
            width: '60%'

        },
        input: {
            height:40,
            borderWidth: 0.5,
        },
        pickerStyle: {
            height: 50,
            width: 150,
        },
        itemStyles: {
            java: { color: '#FF5733' },
            js: { color: '#33FF57' },
            python: { color: '#3366FF' },
            csharp: { color: '#FFD700' },
            swift: { color: '#FF1493' },
        },
    })
}