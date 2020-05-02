import React, { PureComponent } from 'react';
import { SafeAreaView, StatusBar, Text, TextInput } from 'react-native';
import ListComponent from './components/ListComponent';

class App extends PureComponent {

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" backgroundColor={'black'}/>
        <ListComponent />
      </SafeAreaView>
    )
  }
}

export default App;

Text.defaultProps = {}
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = {}
TextInput.defaultProps.allowFontScaling = false;