import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Easing
} from 'react-native';

const animToObject = {
      	toValue: 140,
      	//easing: Easing.in,
      	duration: 1000,
}

const animBackObject = {
      	toValue: 0,
      	//easing: Easing.out,
      	duration: 1000,
}




export default class Loading4 extends Component{

	constructor(props) {
		super(props);
		this.state = {
			translateX: new Animated.Value(0),
		}

		this._anim = this._anim.bind(this)
	}
	static navigationOptions = {
    	title: 'Loaing Animation 4',
  	};

  	componentDidMount() {
  		this._anim()
  	}

  	_anim(){
  		Animated.sequence([
  			Animated.timing(this.state.translateX, animToObject),
  			Animated.timing(this.state.translateX, animBackObject)
  		]).start(()=>{
  			this._anim()
  		})
  		
  	}

  	

	render(){
		return (
			<View style={styles.container}>
				<View style={styles.itemContainer}>
					<Animated.View style={[styles.item , {transform: [{translateX: this.state.translateX}]}]}/>
				</View>
			</View>
			)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	itemContainer: {
		width: 150,
		height: 4,
		borderRadius: 2,
		backgroundColor: 'dodgerblue'
	},
	item: {
		width: 16,
		height: 16,
		borderRadius: 8,
		backgroundColor: 'dodgerblue',
		position: 'absolute',
		top: -6
	}
})