import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Easing
} from 'react-native';

const animToObject = {
      	toValue: 0,
      	//easing: Easing.in,
      	duration: 1000,
}

const animBackObject = {
      	toValue: 150,
      	//easing: Easing.out,
      	duration: 1000,
}




export default class Loading5 extends Component{

	constructor(props) {
		super(props);
		this.state = {
			right: new Animated.Value(150),
			right1: new Animated.Value(150),
			containerBackgroundColor: 'green',
			itemBackgroundColor: 'dodgerblue'
		}

		this._anim = this._anim.bind(this)
		this._anim1 = this._anim1.bind(this)
		this._anim2 = this._anim2.bind(this)
	}
	static navigationOptions = {
    	title: 'Loaing Animation 5',
  	};

  	componentDidMount() {
  		this._anim()
  		this._anim1()
  	}

  	_anim(){
  		Animated.sequence([
  			Animated.timing(this.state.right, animToObject),
  			Animated.timing(this.state.right, animBackObject)
  		]).start(()=>{
  			this._anim()
  		})
  		
  	}

  	_anim1(){
  		
  		this.state.right1.setValue(150)
  		Animated.timing(this.state.right1, animToObject).start(()=>{
  			
  			this.setState({
  				containerBackgroundColor: 'dodgerblue',
				itemBackgroundColor: 'green'
  			})
  			this._anim2()
  		})
  	}

  	_anim2(){
  		
  		this.state.right1.setValue(150)
  		Animated.timing(this.state.right1, animToObject).start(()=>{
  			this.setState({
  			containerBackgroundColor: 'green',
			itemBackgroundColor: 'dodgerblue'
  		})
  			this._anim1()
  		})
  	}

  	

	render(){
		return (
			<View style={styles.container}>
				<View style={[styles.itemContainer, {backgroundColor: 'green'}]}>
					<Animated.View style={[styles.item , {right: this.state.right}]}/>
				</View>

				<View style={[styles.itemContainer, {backgroundColor: this.state.containerBackgroundColor}]}>
					<Animated.View style={[styles.item , {backgroundColor: this.state.itemBackgroundColor,right: this.state.right1}]}/>
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
		height: 8,
		borderRadius: 4,
		
		margin: 10
	},
	item: {
		borderRadius: 4,
		top: 0,
		bottom: 0,
		left: 0,
		backgroundColor: 'dodgerblue',
		position: 'absolute',
	}
})