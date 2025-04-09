import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF3E0', // Bege mais claro
    padding: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    width: '90%',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 15,
    borderRadius: 20,
  },
  balao: {
    flex: 1,
    backgroundColor: '#FFE0B2', // Laranja claro
    padding: 15,
    borderRadius: 20,
    borderBottomLeftRadius: 0, // Formato de balão
    position: 'relative',
  },
  balaoPonta: {
    position: 'absolute',
    left: -15,
    bottom: 0,
    width: 0,
    height: 0,
    borderLeftWidth: 15,
    borderRightWidth: 0,
    borderBottomWidth: 15,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#FFE0B2',
    transform: [{ rotate: '270deg' }],
  },
  title: {
    fontSize: 15,
    color: '#E64A19', // Laranja queimado
    fontWeight: 'bold',
    fontFamily: 'sans-serif-condensed',
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    color: '#5D4037', // Marrom chocolate
    fontFamily: 'sans-serif-condensed',
    lineHeight: 20,
  },
});
