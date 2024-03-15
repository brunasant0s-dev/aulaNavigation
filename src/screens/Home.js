import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo!</Text>
            <Image
                source={require('../assets/logo.png')}
                style={styles.image}
                resizeMode="contain"
            />
            <Text style={styles.description}>
                Encontre uma vasta gama de cores e marcas de esmaltes para realçar a beleza das suas unhas.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f9e4b7', 
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#392620',
    },
    image: {
        width: 300,
        height: 300,
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});
