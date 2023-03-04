import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { CONTINENT_QUERY } from "../gql/Query"
import { useQuery } from '@apollo/client';

const data = useQuery(CONTINENT_QUERY);

export default function ListPage() {
  return (
    <View style={styles.container}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
