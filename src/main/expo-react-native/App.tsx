import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InsertName from './app-pages/insertName';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

export default function App() {

  const client = new ApolloClient({
    uri: 'https://localhost:8080/graphql',
    cache: new InMemoryCache()
  });

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <View style={styles.container}>
          <InsertName/>
        </View>
      </ApolloProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
