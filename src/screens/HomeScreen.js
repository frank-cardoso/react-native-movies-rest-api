import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Bem-vindo ao Movies App</Text>
      <Text style={styles.subtitle}>Explore filmes e descubra novas series.</Text>
      <CustomButton title="Ir para detalhes" onPress={() => navigation.navigate('Details')} />
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
});
