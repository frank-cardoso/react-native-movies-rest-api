import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function CustomButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1F6FEB',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: '#F7F7F7',
    fontSize: 16,
    fontWeight: '600',
  },
});
