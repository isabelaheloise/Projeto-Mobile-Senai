import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen({ route, navigation }) {
    const { username, password } = route.params || {};

    const handleProfileScreen = () => { 
        navigation.navigate('Perfil', {});
    };
    const handleStockScreen = () => { 
        navigation.navigate('Produtos', {});
    };

    useEffect(() => {
        console.log('Tela Home carregada');
    }, [username, password]);

    return (
        <View style={styles.container}>

            <Text style={styles.text}>Seja Bem Vindo</Text>
            {username && <Text style={styles.text}> {username}</Text>}

            <Image source={require('../assets/imghome.png')} style={styles.logo}/>

            <TouchableOpacity style={styles.button} onPress={handleStockScreen}>
                <Text style={styles.textButton}>Produtos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleProfileScreen}>
                <Text style={styles.textButton}>Perfil</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
	inputContainer: {
	  width: '100%',
	  marginBottom: 20,
	},
	button: {
	  justifyContent: 'center',
	  alignItems: 'center',
	  backgroundColor: '#994C00',
	  borderRadius: 20,
	  padding: 10,
	  height: 60,
	  width: '78%',
      marginBottom: 20,
	},
    textButton: {
        fontSize: 22,
        color: 'white',
    },
    text: {
        fontSize: 25,
    },
});