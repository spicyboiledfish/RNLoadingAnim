import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Easing
} from 'react-native';



export default class Loading7 extends Component{

	constructor(props) {
		super(props);
		this.state = {
			width: new Animated.Value(50),
			height: new Animated.Value(30),
			translateX: new Animated.Value(-100)
		}
		this._anim = this._anim.bind(this)
	}
	static navigationOptions = {
    	title: 'Loaing Animation 7',
  	};

  	componentDidMount() {
  		this._anim()
  	}

  	_anim(){
  		Animated.sequence([
  			Animated.timing(this.state.translateX, {
  				toValue: 100,
  				duration: 1500
  			}),
  			Animated.parallel([
  				Animated.timing(this.state.width, {
  					toValue: 30,
  					duration: 300
  				}),
  				Animated.timing(this.state.height, {
  					toValue: 50,
  					duration: 300
  				}),
  			]),
  			Animated.parallel([
  				Animated.timing(this.state.width, {
  					toValue: 50,
  					duration: 300
  				}),
  				Animated.timing(this.state.height, {
  					toValue: 30,
  					duration: 300
  				}),
  			]),
  			Animated.timing(this.state.translateX, {
  				toValue: -100,
  				duration: 1500
  			}),
  			Animated.parallel([
  				Animated.timing(this.state.width, {
  					toValue: 30,
  					duration: 300
  				}),
  				Animated.timing(this.state.height, {
  					toValue: 50,
  					duration: 300
  				}),
  			]),
  			Animated.parallel([
  				Animated.timing(this.state.width, {
  					toValue: 50,
  					duration: 300
  				}),
  				Animated.timing(this.state.height, {
  					toValue: 30,
  					duration: 300
  				}),
  			]),
  		]).start(()=>{
  			this._anim()
  		})
  	}
  	

	render(){
		return (
			<View style={styles.container}>
				<Animated.View style={[styles.item, {width: this.state.width, height: this.state.height, transform: [{translateX: this.state.translateX}]}]} />
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
		backgroundColor: 'dodgerblue',
		borderRadius: 20
	}
})