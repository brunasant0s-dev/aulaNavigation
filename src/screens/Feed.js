import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Button } from 'react-native';

export default function Feed() {
    const [selectedEsmalte, setSelectedEsmalte] = useState(null);

    // Dados de esmaltes
    const esmaltes = [
        { id: 1, nome: 'Rose bombom', preco: 'R$ 10,00', imagemUrl: 'https://www.risque.com.br/wp-content/uploads/2020/04/rosas-bombom-pack.png', descricao: 'Para um rosa chamativo e que traga alegria, use o Esmalte Risqué Rosas Cremoso Rose Bombom. Toda a linha de esmaltes cremosos Risqué Rosas , além de apresentar textura única e cores marcantes, acompanha as tendências da moda, possibilitando diversas composições de looks e maximizando a beleza da sua maquiagem e acessórios. Com secagem rápida, use a sua imaginação e crie lindas nails art que farão sucesso aonde quer que você vá. Com fórmula especial, livre de componentes que costumam causar alergias, o Esmalte Risqué é perfeito para os cuidados diários. Apaixone-se pela cor, presencie a longa duração e viva a beleza de suas unhas de forma única com o Esmalte Risqué Rosas Cremoso Rose Bombom.' },
        { id: 2, nome: 'Pop rose', preco: 'R$ 8,00', imagemUrl: 'https://www.risque.com.br/wp-content/uploads/2020/04/rosas-pop-pack.png', descricao: 'Para quem gosta de curtir seu dia sem medo de ser feliz o Esmalte Risqué Rosas Natural Pop Rose é a melhor pedida. Toda a linha de esmaltes Risqué Rosas Naturais, além de apresentar textura única e cores doces, acompanha as tendências da moda, possibilitando diversas composições de looks e maximizando a beleza da sua maquiagem e acessórios. Com secagem rápida, use a sua imaginação e crie lindas nails art que farão sucesso aonde quer que você vá. Com fórmula especial, livre de componentes que costumam causar alergias, o Esmalte Risqué é perfeito para os cuidados diários. Apaixone-se pela cor, presencie a longa duração e viva a beleza de suas unhas de forma única com o Esmalte Risqué Rosas Natural Pop Rose.' },
        { id: 3, nome: 'Toque de ira', preco: 'R$ 12,00', imagemUrl: 'https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/kibeleza/media/uploads/produtos/foto/zdpgjrki/file.png', descricao: 'O Esmalte Risqué Toque de Ira faz parte da linha Vermelhos, tons clássicos dessa cor que um coringa nas mãos. Ele possui secagem rápida, longa duração, cobertura uniforme e sua fórmula hipoalergência, livre de componentes que costumam causar alergias.' },
        { id: 4, nome: 'Força da imperatriz', preco: 'R$ 12,00', imagemUrl: 'https://www.risque.com.br/wp-content/uploads/2022/03/risque-dandara-forca-da-imperatriz-RGB_final.png', descricao: 'O esmalte Imperatriz faz parte da nova coleção Risqué + Iza, a dona da voz dos hits Pesadão, Brisa e Ginga. Esse esmalte, de cor verde água, é cremoso, de secagem rápida e com ultra brilho, além de ter longa duração nas unhas. A nova coleção Risqué + Iza: As cores das minhas raízes foi toda idealizada em parceria com a cantora, desde a criação de cada cor aos nomes dos esmaltes. É uma homenagem às raízes culturais cheias de cores que servem de inspiração para a Iza até hoje.' },
        { id: 5, nome: 'Neon Gender', preco: 'R$ 8,00', imagemUrl: 'https://www.risque.com.br/wp-content/uploads/2023/04/Design-sem-nome-62.png', descricao: 'O esmalte Neon Gender faz parte da nova coleção Risqué Reinventando o Normal. Esse esmalte é cremoso, de secagem rápida e com ultra brilho, além de ter longa duração nas unhas. A coleção incentiva a quebrar padrões, reinventando a forma de enxergar o que é normal na sociedade. Afinal, normal é se sentir bem consigo mesmo, sem rótulos, sem filtro e de forma divertidamente colorida! Todos os produtos Risqué são aprovados pelo programa Leaping Bunny da Cruelty Free International, padrão ouro globalmente reconhecido para produtos livre de crueldade animal.' },
        { id: 6, nome: 'Diamond Coat', preco: 'R$ 8,00', imagemUrl: 'https://www.risque.com.br/wp-content/uploads/2020/04/img_0013_diamond-coat-pack.png', descricao: 'O Top Coat Fixador Diamond Gel Risqué, vai garantir o efeito gel nas suas unhas. Após a aplicação do esmalte com cor da linha (Passo 1), aplique o Top Coat (passo 2) que foi especialmente desenvolvido para proporcionar durabilidade e alto brilho. Seu pincel possui 800 cerdas para dar precisão na aplicação do produto e sua fórmula hipoalergênica é livre de substâncias de podem causar alergia. Conheça a linha Diamond Gel Risqué: são 20 cores exclusivas!' },
        { id: 7, nome: 'Politicamente colorida', preco: 'R$ 8,00', imagemUrl: 'https://www.risque.com.br/wp-content/uploads/2023/04/Design-sem-nome-64.png', descricao: 'O esmalte Politicamente Colorida faz parte da nova coleção Risqué Reinventando o Normal. Esse esmalte é cremoso, de secagem rápida e com ultra brilho, além de ter longa duração nas unhas. A coleção incentiva a quebrar padrões, reinventando a forma de enxergar o que é normal na sociedade. Afinal, normal é se sentir bem consigo mesmo, sem rótulos, sem filtro e de forma divertidamente colorida! Todos os produtos Risqué são aprovados pelo programa Leaping Bunny da Cruelty Free International, padrão ouro globalmente reconhecido para produtos livre de crueldade animal.' },
    ];

    const handleEsmaltePress = (esmalteId) => {
        setSelectedEsmalte(esmalteId);
    };

    const renderEsmalteCards = () => {
        return esmaltes.map(esmalte => (
            <TouchableOpacity key={esmalte.id} style={styles.card} onPress={() => handleEsmaltePress(esmalte.id)}>
                <Image
                    source={{ uri: esmalte.imagemUrl }}
                    style={styles.imagem}
                    resizeMode="contain"
                />
                <Text style={styles.nome}>{esmalte.nome}</Text>
                <Text style={styles.preco}>{esmalte.preco}</Text>
            </TouchableOpacity>
        ));
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            {renderEsmalteCards()}
            <Modal
                visible={selectedEsmalte !== null}
                transparent={true}
                animationType="slide"
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Image
                            source={{ uri: selectedEsmalte !== null ? esmaltes[selectedEsmalte - 1].imagemUrl : null }}
                            style={styles.modalImagem}
                            resizeMode="contain"
                        />
                        <Text style={styles.modalText}>{selectedEsmalte !== null ? esmaltes[selectedEsmalte - 1].descricao : ''}</Text>
                        <Button title="Cancelar" onPress={() => setSelectedEsmalte(null)} color="#8B4513" />
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollViewContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: '#ffffff',
    },
    card: {
        marginBottom: 20,
        backgroundColor: '#f9e4b7',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        width: '80%',
    },
    imagem: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    nome: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    preco: {
        fontSize: 16,
        color: '#888',
        textAlign: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 8,
        elevation: 5,
        alignItems: 'center',
    },
    modalImagem: {
        width: 150,
        height: 150,
        marginBottom: 10,
    },
    modalText: {
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center',
    },
});
