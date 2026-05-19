import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function DetailsScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Detalhes</Text>
      <Text style={styles.subtitle}>Acesse a lista completa de filmes.</Text>
      <View style={styles.buttonGroup}>
        <CustomButton title="Listar filmes" onPress={() => navigation.navigate('Movies')} />
        <CustomButton title="Voltar para home" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    gap: 16,
    justifyContent: 'center',
    backgroundColor: '#0F1115',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#F7F7F7',
  },
  subtitle: {
    fontSize: 16,
    color: '#BFC5D2',
  },
  buttonGroup: {
    gap: 12,
  },
});
