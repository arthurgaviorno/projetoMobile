import { Text, StyleSheet, View, Image, Dimensions } from "react-native";

const baseURL = 'https://api.otaviolube.com';

const MAX_WIDTH = Dimensions.get('window').width*0.8
const MAX_HEIGHT = Dimensions.get('window').height*0.6

export default function CardFilmes({filme, baseURL}){

    <View style= {styles.container}>
        <Image style={styles.poster} source={{uri:baseURL+filme.poster.data.attributes.url}}/>
        <Text>{filme.titulo}</Text>
        <Text>{filme.subtitulo}</Text>
        <Text>{filme.sinopse}</Text>
        <TouchableOpacity>
            <Text>Comprar</Text>
        </TouchableOpacity>
    </View>

}

const styles = StyleSheet.create({
    poster: {
        width: '200px', 
        height: '300px'
    },
    container: {
        backgroundColor: 'green',
        margin: '20px',
        padding: '20px',
        height: MAX_HEIGHT,
        width: MAX_WIDTH
    },
})