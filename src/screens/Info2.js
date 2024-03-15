import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native';

export default function Info2({navigation}) {
    return (
      
        <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Nosso propósito</Text>
        <View style={styles.textContainer}>
            <Text style={styles.text}>
            Na "Minhas Unhas", nosso propósito vai além de apenas oferecer uma vasta seleção de esmaltes e produtos de beleza. Estamos aqui para celebrar e elevar a arte da autoexpressão, transformando cada unha em uma tela para a sua criatividade.
<br></br><br></br>
Acreditamos que suas unhas são muito mais do que simplesmente uma parte do seu corpo - são uma expressão única da sua personalidade, estilo e essência. Nosso propósito é fornecer a você as ferramentas e o espaço para explorar, experimentar e celebrar essa expressão.
<br></br><br></br>
Em nossa loja, você encontrará não apenas uma variedade de cores vibrantes e acabamentos deslumbrantes, mas também inspiração e apoio para criar looks que são verdadeiramente seus. Quer você esteja buscando um visual discreto e elegante ou algo ousado e expressivo, estamos aqui para ajudá-lo a alcançar o seu objetivo.
<br></br><br></br>
Além disso, nosso propósito se estende além das suas unhas - estamos comprometidos em promover a autoestima e o bem-estar de nossos clientes. Acreditamos que o autocuidado é essencial para o seu bem-estar geral, e é por isso que estamos aqui para encorajá-lo a dedicar um tempo para si mesmo, seja pintando suas unhas ou simplesmente cuidando de você de outras maneiras.
<br></br><br></br>
Em resumo, nosso propósito na "Minhas Unhas" é simples: capacitar você a expressar sua verdadeira essência, elevando a arte da autoexpressão através das suas unhas. Junte-se a nós enquanto celebramos a beleza única de cada indivíduo, uma pincelada de cada vez.    
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
