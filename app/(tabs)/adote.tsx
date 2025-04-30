import { View, Text, Image } from 'react-native';
import React from 'react';
import { styles } from './style/style_adote';

const Adote = () => {
  return (
    <View style={styles.container}>
      {/* Item 1 */}
      <View style={styles.item}>
        <Image
          style={styles.image}
          source={require('./imagens/Luan.jpg')}
        />
        <View style={styles.balao}>
          <Text style={styles.title}>Nome: Luan (5 anos)</Text>
          <Text style={styles.text}>Adora brincar no parque</Text>
          <Text style={styles.text}></Text>
        </View>
      </View>

      {/* Item 2 */}
      <View style={styles.item}>
        <Image
          style={styles.image}
          source={require('./imagens/Sofia.jpg')}
        />
        <View style={styles.balao}>
          <Text style={styles.title}>Nome: Sofia (7 anos)</Text>
          <Text style={styles.text}>Amante de animais e arte</Text>
          <Text style={styles.text}></Text>
        </View>
      </View>

      {/* Item 3 */}
      <View style={styles.item}>
        <Image
          style={styles.image}
          source={require('./imagens/Pedro.jpg')}
        />
        <View style={styles.balao}>
          <Text style={styles.title}>Nome: Pedro (6 anos)</Text>
          <Text style={styles.text}>Cheio de energia e curiosidade</Text>
          <Text style={styles.text}></Text>
        </View>
      </View>

      {/* Item 4 - NOVO */}
      <View style={styles.item}>
        <Image
          style={styles.image}
          source={require('./imagens/Clara.jpg')}
        />
        <View style={styles.balao}>
          <Text style={styles.title}>Nome: Clara (4 anos)</Text>
          <Text style={styles.text}>Encantada por histórias de fadas</Text>
          <Text style={styles.text}></Text>
        </View>
      </View>

      {/* Item 5 - NOVO */}
      <View style={styles.item}>
        <Image
          style={styles.image}
          source={require('./imagens/Lucas.jpg')}
        />
        <View style={styles.balao}>
          <Text style={styles.title}>Nome: Lucas (8 anos)</Text>
          <Text style={styles.text}>Fascinado por astronomia</Text>
          <Text style={styles.text}></Text>
        </View>
      </View>
    </View>
  );
};

export default Adote;
