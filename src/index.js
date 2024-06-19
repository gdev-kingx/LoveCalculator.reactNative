import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Constants from 'expo-constants'

const LoveCalc = () => {
    const [maleName, setMaleName] = useState('');
    const [femaleName, setFemaleName] = useState('');
    const [loading, setLoading] = useState(false);
    const [lovePercent, setLovePercent] = useState([]);

    const calculateLove = () => {
        const API_URL = `https://love-calculator.p.rapidapi.com/getPercentage?sname=${femaleName}&fname=${maleName}`
        setLoading(true)
        fetch(API_URL, {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '2381da73ccmsh593d576ceeb567ap12ed69jsn2fa73ae6706f',
                'x-rapidapi-host': 'love-calculator.p.rapidapi.com'
            }
        })
        .then(response => response.json())
        .then(data => {
            setLoading(false)
            console.log(data)
            setLovePercent(data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>Love Calc</Text>
            </View>
            <TextInput 
                placeholder='Male Name'
                value={maleName}
                onChangeText={text => setMaleName(text)}
                style={styles.input}
            />
            <TextInput 
                placeholder='Female Name'
                value={femaleName}
                onChangeText={text => setFemaleName(text)}
                style={styles.input}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={calculateLove}
            >
                <Text style={styles.buttonText}>Calculate</Text>
            </TouchableOpacity>
            <View style={styles.round}>
                <Text style={styles.result}>
                    {lovePercent.percentage}
                </Text>
            </View>
            <View style={styles.conclusion}>
                <Text style={styles.result}>
                    {lovePercent.result}
                </Text>
            </View>
        </View>
    )
}   

export default LoveCalc

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFEEDB',
        paddingTop: Constants.statusBarHeight
    },
    title: {
        height: 80,
        width: '100%',
        backgroundColor: '#0a1d37',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
    },
    input: {
        height: 55,
        margin: 15,
        borderWidth: 1,
        padding: 10,
        borderRadius: 15,
        fontSize: 18,
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
    },
    button: {
        height: 50,
        margin: 15,
        borderWidth: 1/2,
        padding: 10,
        borderRadius: 15,
        fontSize: 18,
        backgroundColor: '#ffbd9b',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    result: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    round: {
        height: 100,
        width: 100,
        borderRadius: 50,
        backgroundColor: '#ffd8cc',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    conclusion: {
        padding: 20
    }
})
