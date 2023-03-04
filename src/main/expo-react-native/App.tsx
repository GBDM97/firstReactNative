import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InsertName from './app-pages/insertName';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { MainContext } from './context/mainContext';
import React from 'react';
import ListPage from './app-pages/listPage';

export default function App() {

  const { currentPage, changePage } = React.useContext(MainContext);

  const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com/graphql',
    cache: new InMemoryCache()
  });

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <View style={styles.container}>
          {currentPage === 1 ? <InsertName/> : ""}
          {currentPage === 2 ? <ListPage/> : ""} 

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
