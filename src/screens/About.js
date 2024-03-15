import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function About() {
    return (
       <View style={styles.container}>
            <Image
                source={require('../assets/logo.png')}
                style={styles.imagem}
                resizeMode="contain"
            />
            <Text style={styles.texto}>
                Bem-vindo à nossa loja de esmaltes! Aqui você encontrará uma grande variedade de cores e marcas para realçar a beleza das suas unhas. Nossa missão é oferecer produtos de qualidade e um excelente atendimento para nossos clientes. Estamos sempre buscando as últimas tendências em esmaltes para garantir que você esteja sempre na moda. Obrigado por escolher a nossa loja!
            </Text>
            <Text style={styles.contato}>Entre em Contato para adquirir seus esmaltes!</Text>
            <TouchableOpacity style={styles.botaoContato}>
                <Text style={styles.textoBotao}>Enviar Mensagem</Text>
            </TouchableOpacity>
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
    imagem: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    texto: {
        fontSize: 16,
        textAlign: 'justify',
        marginBottom: 20,
    },
    contato: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    botaoContato: {
        backgroundColor: '#392620',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    textoBotao: {
        color: '#fff',
        fontSize: 16,
    },
});
