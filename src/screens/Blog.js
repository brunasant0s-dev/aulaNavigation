import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';

export default function Blog({ navigation }) {
    return (
       <View style={styles.container}>
         <Image
                source={require('../assets/logo.png')}
                style={styles.image}
                resizeMode="contain"
            />
        <Pressable style={styles.botao}
        onPress={() => navigation.navigate('Info1')}>
            <Text style={styles.textoBotao}>Quem somos nós?</Text>
        </Pressable>
        <View style={{ marginBottom: 20 }} />
        <Pressable style={styles.botao}
        onPress={() => navigation.navigate('Info2')}>
            <Text style={styles.textoBotao}>Nosso propósito</Text>
        </Pressable>
       </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9e4b7'
    },
    image: {
        width: 300, 
        height: 300, 
        marginBottom: 20,
    },
    botao: {
        padding: 20,
        width: 200,
        height: 40,
        backgroundColor: '#392620',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,

    },
    textoBotao: {
        color: 'white',
        fontSize: 15,
    }
});