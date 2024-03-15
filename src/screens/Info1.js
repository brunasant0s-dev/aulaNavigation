import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';

export default function Info1({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Quem somos nós?</Text>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                

Bem-vindo à nossa casa de cores e criatividade, onde cada pincelada é uma expressão única de sua personalidade. Somos mais do que uma loja de esmaltes, somos um destino para os amantes da beleza e da moda, onde a arte das unhas ganha vida.

Desde o momento em que abrimos nossas portas, dedicamos-nos a oferecer uma experiência excepcional a todos os nossos clientes. Nossa paixão pela beleza impulsiona cada decisão que tomamos, desde a seleção cuidadosa dos produtos até o atendimento ao cliente caloroso e personalizado.
<br></br><br></br>
Aqui, não apenas oferecemos uma ampla gama de cores vibrantes e acabamentos luxuosos, mas também buscamos inspirar e capacitar você a experimentar e explorar seu próprio estilo. Nossos especialistas estão sempre à disposição para orientá-lo, seja você um iniciante curioso ou um veterano experiente.
<br></br><br></br>
Acreditamos que a beleza vai além do exterior; é uma expressão autêntica de quem você é. É por isso que nos esforçamos para criar um ambiente inclusivo e acolhedor, onde todas as pessoas possam se sentir bem-vindas e celebradas.
<br></br><br></br>
Nossa missão é simples: ajudá-lo a brilhar, unha por unha. Junte-se a nós nesta jornada de autodescoberta e transformação. Na nossa loja, as possibilidades são infinitas, e a beleza está ao seu alcance.
                </Text>
            </View>
            <Pressable style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Voltar para o blog</Text>
            </Pressable>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: '#f9e4b7'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    textContainer: {
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        textAlign: 'justify',
    },
    button: {
        paddingVertical: 15,
        paddingHorizontal: 30,
        backgroundColor: '#392620',
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});
