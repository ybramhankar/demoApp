import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Login from './src/screens/Login';
import Tasks from './src/screens/Tasks';

const App = () => {
  const [page, setPage] = useState('Login');

  return (
    <SafeAreaView style={styles.mainContainer}>
      {page == 'Login' ? (
        <Login
          page={pageName => {
            setPage(pageName);
          }}
        />
      ) : page == 'Tasks' ? (
        <Tasks
          page={pageName => {
            setPage(pageName);
          }}
        />
      ) : null}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
