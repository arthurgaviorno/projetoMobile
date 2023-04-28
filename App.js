import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Text, View, Image} from 'react-native';

import CardFilmes from './CardFilmes';

const baseURL = 'https://api.otaviolube.com';



export default function App() {

  const [filmes, setFilmes] = useState([]);



  useEffect(function(){
    fetch('https://api.otaviolube.com/api/filmes?populate=*')
    .then(response => response.json())
    .then(objeto => {
      console.log(objeto);
      setFilmes(objeto.data);
    })
  }, [])

  return (

  <View style={styles.container}>
    {filmes.map(filme => 
      <CardFilmes filme = {filme.attributes} baseURL = {baseURL}/>
    
    )}
    
    <StatusBar style="auto" />
  </View>
);

}

