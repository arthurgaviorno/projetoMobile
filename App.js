
import { useEffect, useState } from 'react';
import { Text, ScrollView } from 'react-native';

import styles from './src/components/styles'
import { SafeAreaView } from 'react-native-web';
import Movies from './card';

export default function App() {

  let [filmes, setFilmes] = useState([]);

  const baseURL = 'https://api.otaviolube.com/api/filmes?populate=*';
  

  useEffect(function(){
    fetch(baseURL)
    .then(data => data.json())
    .then(objeto => {
      console.log(objeto);
      setFilmes(objeto.data);
    })
  }, []);

  return (

    <SafeAreaView style={styles.content}>
     
          {filmes.length > 0 ? filmes.map(filme => 
        <Movies key={filme.id} filme={filme.attributes}></Movies>):
        <Text>Loading...</Text>}
    
    </SafeAreaView>

  )}
