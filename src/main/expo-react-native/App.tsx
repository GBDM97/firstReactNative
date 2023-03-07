import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { MainContextProvider } from './context/mainProvider';
import InsertName from './app-pages/insertName';
import ListPage from './app-pages/listPage';

export default function App() {
  
  const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com/graphql',
    // uri: 'https://localhost:8080/graphql',

    cache: new InMemoryCache()
  });
  
  return (
    <Provider store={store}>
      <MainContextProvider>
        <ApolloProvider client={client}>
          <View style={styles.container}>
            <InsertName/>
            <ListPage/>
          </View>
        </ApolloProvider>
      </MainContextProvider>
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
