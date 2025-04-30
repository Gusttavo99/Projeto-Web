import { View, Text, Image, TouchableOpacity } from 'react-native';
import  styles  from './style/style_nos_apoie';

const NosApoie = () => {
  const handleDoacao = () => {
    console.log('Doação realizada com sucesso!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Apadrinhe uma Criança Carente</Text>

      <Image
        source={require('./imagens/crianca-feliz.jpg')} 
        style={styles.imagem}
      />

      <Text style={styles.descricao}>
        Sua contribuição é fundamental para que possamos continuar apoiando crianças carentes.
      </Text>

      <TouchableOpacity style={styles.botaoDoacao} onPress={handleDoacao}>
        <Text style={styles.textoBotao}>Seja um Apadrinhador</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NosApoie;