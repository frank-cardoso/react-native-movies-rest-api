import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const renderMovieItem = ({ item }) => {
  const genresText = item.genres && item.genres.length > 0 ? item.genres.join(', ') : 'Sem genero';
  const ratingText = item.rating && item.rating.average ? item.rating.average : 'N/A';
  const imageUri = item.image?.medium || item.image?.original;

  return (
    <View style={styles.card}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.cardImage} resizeMode="cover" />
      ) : (
        <View style={styles.cardImagePlaceholder} />
      )}
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.cardMeta}>{genresText}</Text>
        <Text style={styles.cardRating}>Nota: {ratingText}</Text>
      </View>
    </View>
  );
};

export default function MoviesScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://api.tvmaze.com/shows');
      const json = await response.json();
      setData(json.slice(0, 50));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={data}
        renderItem={renderMovieItem}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: '#0F1115',
  },
  listContent: {
    padding: 16,
    gap: 16,
  },
  card: {
    backgroundColor: '#171A21',
    borderRadius: 18,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 8,
  },
  cardImage: {
    width: '100%',
    height: 220,
  },
  cardImagePlaceholder: {
    width: '100%',
    height: 220,
    backgroundColor: '#2A2F3A',
  },
  cardContent: {
    padding: 16,
    gap: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#F7F7F7',
  },
  cardMeta: {
    fontSize: 14,
    color: '#BFC5D2',
  },
  cardRating: {
    fontSize: 14,
    color: '#F7C948',
    fontWeight: '600',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0F1115',
  },
});
