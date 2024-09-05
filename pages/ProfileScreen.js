import { View, Text, StyleSheet } from 'react-native';
export default function ProfileScreen() {

return (
	<View style={styles.container}>

		<Text style={styles.text}>Seja Bem Vindo</Text>
		<Text style={styles.text}>à tela de Perfil</Text>

	</View>
);
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
	text: {
        fontSize: 25,
    },
});