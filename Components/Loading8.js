import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Easing
} from 'react-native';

const animToObject = {
    toValue: 1,
    easing: Easing.linear,
    duration: 2000,
}

export default class Loading8 extends Component{

	constructor(props) {
		super(props);
		this.state = {
			rotate: new Animated.Value(0)
		}
		this._anim = this._anim.bind(this)
	}
	static navigationOptions = {
    	title: 'Loaing Animation 8',
  	};

  	componentDidMount() {
  		this._anim()
  	}

  	_anim(){
  		this.state.rotate.setValue(0)
      Animated.timing(this.state.rotate, animToObject).start(()=>{
        this._anim()
      })
  	}
  	

	render(){
		return (
			<View style={styles.container}>
				<Animated.View style={[styles.item, {transform: [{rotateZ: this.state.rotate.interpolate({
                        inputRange: [0,1],
                        outputRange: ['0deg', '360deg']
          })}]}]}>
          <View style={styles.circle}></View>
        </Animated.View>
			</View>


			)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row'
	},
	item: {
    width: 120,
    height: 120,
    borderWidth: 5,
		borderColor: 'dodgerblue',
		borderRadius: 60
	},
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'dodgerblue',
    position: 'absolute',
    left: '50%',
    transform: [{
      translateX: -15,
    },{
      translateY: -15
    }]
  }
})