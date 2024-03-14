import { StatusBar } from 'expo-status-bar';
// import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';


export default function App() {
  // const [text, onChangeText] = useState('Useless Text');
  
  return (
    <View style={styles.container}>
      <View style={styles.imagem}>
        <Image  source={{uri:'https://p4.wallpaperbetter.com/wallpaper/431/451/684/the-most-beautiful-picture-of-nature-wallpaper-preview.jpg'}} style={{width: 300, height: 200}}/>
      </View>
      <View style={styles.card}>
          <Text>
            olá insira seu nome
          </Text>
          <TextInput
            style={{height: 40, width:200, borderColor: 'black', color: '#150050',  borderWidth: 1,}}
            placeholder="Escreva seu nome: "
            // onChangeText={newText => setText(newText)}
          />
      </View>
      <View style={styles.quadro}>
           <Button 
            title="Entrar"
            color={'#150050'} 
            onPress={() => Alert.alert('Botão pressionado')}
          />
          <Button 
            style={styles.botao}
            title="Cadrastrar"
            color={'#150050'}
            onPress={() => Alert.alert('Botão pressionado')}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F1F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem: {
    marginTop: '0px',
    width: 400,
    height: 200,
    justifyContent: 'center',
    alignItems:'center',
  },
  card: {
    margin: 15,
    alignItems: 'start',
    justifyContent: 'space-around',
    gap: 8,
  },
  quadro: {
    width: 200,
    height:300,
    color:'#19A7CE',
  },
  botao: {
    width:20,
    height:40,
    backgroundColor: 'black',
    color: '#FF1E56', 
  },
});
