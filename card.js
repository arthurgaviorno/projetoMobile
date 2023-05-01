import { Image, Text, View, TouchableOpacity } from "react-native"

import styles from "./src/components/styles"

const imageURL = 'https://api.otaviolube.com';


export default function Movies({filme}){
    return (
        <View style={styles.container}> 
        <View style={styles.cardFilmes}>
          <Text style={styles.anuncio}>EM EXIBIÇÃO NOS CINEMAS MAIS PRÓXIMOS!</Text>
          <View style={styles.Img}>
              <Image style={styles.poster} source={{uri: imageURL+filme.poster.data.attributes.formats.small.url}}></Image>
          </View>
          <Text style={styles.titulo} >{filme.titulo}</Text>
          <Text style={styles.subtitulo}>{filme.subtitulo}</Text>
          <Text style={styles.sinopse}>Sinopse: {filme.sinopse}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Alugar Filme</Text>
          </TouchableOpacity>
        </View>
        </View>
    )
}