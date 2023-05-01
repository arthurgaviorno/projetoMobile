import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  anuncio: {
    margin: 5,
    fontSize: 15,
    fontWeight: 'bold',
    
},

container: {
    alignItems: "center",
    justifyContent: "center",
    
},

cardFilmes: {
  backgroundColor: "red",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: 400,
  margin: 15,
  borderRadius: 15

},

content: {
 width: '100%',
},

titulo: {
  marginTop: '5%',
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
  textAlign: 'center',
  marginBottom: 5
},

sinopse: {
  color: 'black',
  textAlign: 'center',
  marginBottom: '5%',
  maxWidth: 390

},

poster: {
  width: 250,
  height: 400,
},

button: {
  height: 40,
  width: 300,
  borderRadius: 25,
  backgroundColor: 'black',
  margin: 10,
  alignItems: 'center',
  justifyContent: 'center'
},

buttonText: {
  color: 'white',
  fontWeight: 'bold'
}

});

  export default styles;