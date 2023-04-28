import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    anuncio: {
        marginBottom: 10,
        fontSize: 15,
        fontWeight: 'bold',
    },

    cardFilmes: {
      display: 'flex',
      paddingLeft: '10%',
      flexDirection: 'column',
      backgroundColor: "white",
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: 720
    },
    
    viewImg: {
      padding: 3,
      width: '70%',
      height: '50%',
      maxWidth: '100%',
      maxHeight: 550,
      display: 'flex',
      justifyContent: 'center'
    },
  
    content: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      fontSize: 18,
      margin: 10,
    },
    
    titulo: {
      marginTop: '10%',
      fontSize: 20,
      color: 'black',
      fontWeight: 'bold',
      marginBottom: 3,
      textAlign: 'center',
    },
    
    subtitulo: {
      fontSize: 15,
      color: 'black',
      fontWeight: 'bold',
      fontStyle: 'italic',
      textAlign: 'center'
    },
    
    sinopse: {
      color: 'black',
      textAlign: 'center',
      marginBottom: '10%',
      maxWidth: 390
    },
  
    poster: {
      width: 350,
      height: 700,
    }
  });

  export default styles;