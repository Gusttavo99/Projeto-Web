import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './style/style_index'

const index = () => {
  return (
    <View style={styles.container}>
      <Image
      style={{width: 150, height: 150, marginBottom: 50}}
      source={require('../(tabs)/style/imagem/logo2.0.png')}
      />
      <Text style={styles.titulo}>Bem Vindo!</Text>
      <Text style={styles.subtitulo}>Este projeto visa ajudar crianças carentes!</Text>
    </View>
  )
}

export default index