import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { useDarkMode } from 'react-native-dark-mode'


/*
import { initialMode, eventEmitter } from 'react-native-dark-mode';
console.log('App started in', initialMode, 'mode')

eventEmitter.on('currentModeChanged', newMode => {
  console.log('Switched to', newMode, 'mode')
})
*/

export default class App extends React.Component{
  constructor(props) {
    super(props);

  }

  render() {
    // const isDarkMode = useDarkMode()
    return (
      <View style={[styles.container,{
        // backgroundColor: isDarkMode ? 'black' : 'white'
      }]}>
        <Text>Open up App.js </Text>
        <View style={{width: 50, height: 50, backgroundColor: '#ccc'}}>
          <Text>UI iu</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
