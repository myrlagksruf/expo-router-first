import * as React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Application from 'expo-application';


export default function App() {
  console.log(Application.applicationId)
  return (
    <WebView
      style={styles.container}
      originWhitelist={['*']}
      source={{ uri: `http://192.168.1.30:5500`}}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
