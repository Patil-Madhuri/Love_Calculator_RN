import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Appbar, Button, ActivityIndicator } from 'react-native-paper';
import DisplayLove from './components/DisplayLove';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      male: '',
      female: '',
      result: '',
      isLoaded: false
    };
  }
  calculate() {
    this.setState({
      isLoaded: true,
      result: ''
    })
    console.log(this.state.isLoaded);

    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.male}&sname=${this.state.female}`, {
      headers: {
        "x-rapidapi-host": "love-calculator.p.rapidapi.com",
        "x-rapidapi-key": "e8904a3b92msh29deb9343f8dd5ap1167bejsnd3df09dd4ff3"
      }
    })
      .then(data => data.json())
      .then(response => {
        console.log(response);
        this.setState({
          result: response,
          isLoaded: false

        })
      })

  }
  render() {
    return (
      <View>
        <Appbar.Header>
          <Appbar.Content
            title="Love Calculator"
            style={{ alignItems: 'center' }}
          />
        </Appbar.Header>
        <View >
          <TextInput
            style={styles.container}
            mode="outlined"
            label='Person Name(Male)'
            value={this.state.male}
            onChangeText={text => this.setState({ male: text, result: '' })}
          />
          <TextInput
            style={styles.container}
            mode="outlined"
            label='Person Name(Female)'
            value={this.state.female}
            onChangeText={text => this.setState({ female: text, result: '' })}
          />
          {this.state.isLoaded ?
            <View>
              <ActivityIndicator size="large" color="#0000ff" />
              <Text style={styles.text}>Calculating......</Text>
            </View>

            : <Button style={styles.button} icon="calculator" mode="contained" onPress={() => this.calculate()}>
              Calculate
          </Button>
          }

          {this.state.result !== '' ? <DisplayLove resultData={this.state.result}
          /> : <View></View>
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30
  },
  button: {
    margin: 20
  },
  text: {
    textAlign:'center',
    fontSize:15,
    color: 'blue'
  }
});
