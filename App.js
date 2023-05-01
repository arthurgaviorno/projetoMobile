import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';

import styles from './src/components/styles'
import { SafeAreaView } from 'react-native-web';

export default function App() {

  let [filmes, setFilmes] = useState([]);

  const baseURL = 'https://api.otaviolube.com/api/filmes?populate=*';
  const imageURL = 'https://api.otaviolube.com';

  useEffect(function(){
    fetch(baseURL)
    .then(data => data.json())
    .then(objeto => {
      console.log(objeto);
      setFilmes(objeto.data);
    })
  }, []);

  return (

  <View style={styles.content}>

    {(filmes.map((filme) => (

      <SafeAreaView key={filme._id} style={styles.container}>

        <ScrollView>
      
        <View style={styles.cardFilmes}>
          <Text style={styles.anuncio}>EM EXIBIÇÃO NOS CINEMAS MAIS PRÓXIMOS!</Text>
          <View style={styles.Img}>
              <Image style={styles.poster} source={{uri: imageURL+filme.attributes.poster.data.attributes.formats.small.url}}></Image>
          </View>
          <Text style={styles.titulo}>{filme.attributes.titulo}</Text>
          <Text style={styles.subtitulo}>{filme.attributes.subtitulo}</Text>
          <Text style={styles.sinopse}>{filme.attributes.sinopse}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Alugar Filme</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </SafeAreaView>
    ))
    )}
    
    <StatusBar style="auto" />
  </View>

  )}
