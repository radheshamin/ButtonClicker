import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Button,
  ButtonGroup,
  Alert
} from 'react-native'

class App extends Component {
  state = {
    count: 0,
    second: 0,
    third: 0,
    fourth: 0,
    fifth: 0,
    time: 0,
    array : Array.from({length: 10}, () => (Math.floor(Math.random() * 5)) + 1),
    highscore: null
  }


  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: this.state.time + 1
    });
  }

  checkButtonPress(number) {
    var numarray = this.state.array;
    if (this.state.array.length == 0){
      var currtime = this.state.time;
      if (this.state.highscore != null && this.state.highscore < currtime) {
        currtime = this.state.highscore;
      }
      this.setState({
        array: Array.from({length: 10}, () => (Math.floor(Math.random() * 5)) + 1),
        highscore: currtime,
        time: 0
      });
      this.componentDidMount();
    } else if (number == numarray[0]) {
      this.setState({
        array: this.state.array.slice(1)
      })
    } 
    else {
      this.setState({
        array: Array.from({length: 10}, () => (Math.floor(Math.random() * 5)) + 1),
        time: this.state.time
      });
        Alert.alert('You have failed. Please try again', 'Your time has not been reset.');
          return {
              type: 'ALERT_USER',
              alert
          };
    }
    if (this.state.array.length == 1){
      this.componentWillUnmount();
      
      Alert.alert('Congratulations! You have won. You can see your time below.', 'Please click on any button to try again.');
          return {
              type: 'ALERT_USER',
              alert
          };
    }
  }

  onPress = () => {
    this.checkButtonPress(1);
    this.setState({
      count: this.state.count + 1
    })
  }
  onSecondPress = () => {
    this.checkButtonPress(2);
    this.setState({
      second: this.state.second + 1
    })
  }
  onThirdPress = () => {
    this.checkButtonPress(3);
    this.setState({
      second: this.state.third + 1
    })
  }
  onFourthPress = () => {
    this.checkButtonPress(4);
    this.setState({
      second: this.state.fourth + 1
    })
  }
  onFifthPress = () => {
    this.checkButtonPress(5);
    this.setState({
      second: this.state.fifth + 1
    })
  }

 render() {
   
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.setFontSizeOne}>
            Pattern to copy: {this.state.array }
          </Text>
        </View>
        <View style={styles.buttongroup}>
        <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
        >
         <Text style={styles.setButtonFont}>1</Text>
        </TouchableOpacity>
        <View style={styles.space}></View>
        {/* <View>
          <Text>
            You clicked { this.state.count } times
          </Text>
        </View> */}
        <TouchableOpacity
         style={styles.button}
         onPress={this.onSecondPress}
        >
          <Text style={styles.setButtonFont}>2</Text>
        </TouchableOpacity>
        <View style={styles.space}></View>
        <TouchableOpacity
         style={styles.button}
         onPress={this.onThirdPress}
        >
          <Text style={styles.setButtonFont}>3</Text>
        </TouchableOpacity>
        <View style={styles.space}></View>
        <TouchableOpacity
         style={styles.button}
         onPress={this.onFourthPress}
        >
          <Text style={styles.setButtonFont}>4</Text>
        </TouchableOpacity>
        <View style={styles.space}></View>
        <TouchableOpacity
         style={styles.button}
         onPress={this.onFifthPress}
        >
          <Text style={styles.setButtonFont}>5</Text>
        </TouchableOpacity>
        <View style={styles.space}></View>
        </View>
        
        <View>
          <Text style={styles.setFontSizeOne}>
            Time elapsed: { this.state.time } seconds
          </Text>
        </View>
        <View>
          <Text style={styles.setFontSizeOne}>
            High Score: { this.state.highscore } seconds
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    flexWrap: "wrap",
    alignItems: 'center',
    backgroundColor: '#ADD8E6'
  },
  buttongroup: {
    flexDirection: "row",
    justifyContent: 'center',
    flexWrap: "wrap",
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    width: "30%",
    padding: 10,
    marginTop: 50,
    marginBottom: 0
  },
  space: {
    width: "5%",
    height: 0
  },
  setFontSizeOne: {
    fontSize: 25 // Define font size here in Pixels
  },
  setButtonFont: {
    fontSize: 18 // Define font size here in Pixels
  }
})

// function checkButtonPress(number) {
//   var numarray = this.state.array;
//   if (number == numarray[0]) {
//     numarray = numarray.shift();
//     this.setState({
//       array: numarray
//     })
//   } 
//   // else {
//   //   alertUser = (alert) => {
//   //     Alert.alert('Alert title', alert);
//   //       return {
//   //           type: 'ALERT_USER',
//   //           alert
//   //       } };
//   // }
// }

export default App;