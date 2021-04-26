import React from 'react';

import { AppRegistry, View, Text } from 'react-native';
import { name as appName } from './app.json';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>D I G</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent(appName, () => App);
