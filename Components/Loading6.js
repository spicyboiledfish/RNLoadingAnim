import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Easing
} from 'react-native';

const animOpacityToObject = {
  	toValue: 0.2,
  	//easing: Easing.linear,
  	duration: 1000,
}

const animTranslateXToObject = {
  	toValue: 75,
  	//easing: Easing.linear,
  	duration: 1000,
}

const animOpacityBackObject = {
  	toValue: 1,
  	//easing: Easing.linear,
  	duration: 1000,
}

const animTranslateXBackObject = {
  	toValue: -75,
  	//easing: Easing.linear,
  	duration: 1000,
}


export default class Loading6 extends Component{

	constructor(props) {
		super(props);
		this.state = {
			opacity1: new Animated.Value(0),
			opacity2: new Animated.Value(0),
			opacity3: new Animated.Value(0),
			opacity4: new Animated.Value(0),
			opacity5: new Animated.Value(0),
			translateX1: new Animated.Value(-75),
			translateX2: new Animated.Value(-75),
			translateX3: new Animated.Value(-75),
			translateX4: new Animated.Value(-75),
			translateX5: new Animated.Value(-75),
		}
		this._anim1 = this._anim1.bind(this)
		this._anim2 = this._anim2.bind(this)
		this._anim3 = this._anim3.bind(this)
		this._anim4 = this._anim4.bind(this)
		this._anim5 = this._anim5.bind(this)
	}
	static navigationOptions = {
    	title: 'Loaing Animation 6',
  	};

  	componentDidMount() {
  		setTimeout(this._anim1, 130)
  		setTimeout(this._anim2, 260)
  		setTimeout(this._anim3, 390)
  		setTimeout(this._anim4, 520)
  		setTimeout(this._anim5, 650)
  	}

  	_anim1(){
  		Animated.sequence([
  			Animated.parallel([
  				Animated.timing(this.state.opacity1, animOpacityToObject),
  				Animated.timing(this.state.translateX1, animTranslateXToObject)
  			]),
  			Animated.parallel([
	  			Animated.timing(this.state.opacity1, animOpacityBackObject),
	  			Animated.timing(this.state.translateX1, animTranslateXBackObject)
	  		])
  		]).start(()=>{
  			this._anim1()
  		})
  		
  	}
  	_anim2(){
  		Animated.sequence([
  			Animated.parallel([
  				Animated.timing(this.state.opacity2, animOpacityToObject),
  				Animated.timing(this.state.translateX2, animTranslateXToObject)
  			]),
  			Animated.parallel([
	  			Animated.timing(this.state.opacity2, animOpacityBackObject),
	  			Animated.timing(this.state.translateX2, animTranslateXBackObject)
	  		])
  		]).start(()=>{
  			this._anim2()
  		})
  	}

  	_anim3(){
  		Animated.sequence([
  			Animated.parallel([
  				Animated.timing(this.state.opacity3, animOpacityToObject),
  				Animated.timing(this.state.translateX3, animTranslateXToObject)
  			]),
  			Animated.parallel([
	  			Animated.timing(this.state.opacity3, animOpacityBackObject),
	  			Animated.timing(this.state.translateX3, animTranslateXBackObject)
	  		])
  		]).start(()=>{
  			this._anim3()
  		})
  	}

  	_anim4(){
  		Animated.sequence([
  			Animated.parallel([
  				Animated.timing(this.state.opacity4, animOpacityToObject),
  				Animated.timing(this.state.translateX4, animTranslateXToObject)
  			]),
  			Animated.parallel([
	  			Animated.timing(this.state.opacity4, animOpacityBackObject),
	  			Animated.timing(this.state.translateX4, animTranslateXBackObject)
	  		])
  		]).start(()=>{
  			this._anim4()
  		})
  	}

  	_anim5(){
  		Animated.sequence([
  			Animated.parallel([
  				Animated.timing(this.state.opacity5, animOpacityToObject),
  				Animated.timing(this.state.translateX5, animTranslateXToObject)
  			]),
  			Animated.parallel([
	  			Animated.timing(this.state.opacity5, animOpacityBackObject),
	  			Animated.timing(this.state.translateX5, animTranslateXBackObject)
	  		])
  		]).start(()=>{
  			this._anim5()
  		})
  	}

	render(){
		return (
			<View style={styles.container}>
				<Animated.View style={[styles.item, {opacity: this.state.opacity1, transform: [{translateX: this.state.translateX1}]}]} />
				<Animated.View style={[styles.item, {opacity: this.state.opacity2, transform: [{translateX: this.state.translateX2}]}]} />
				<Animated.View style={[styles.item, {opacity: this.state.opacity3, transform: [{translateX: this.state.translateX3}]}]} />
				<Animated.View style={[styles.item, {opacity: this.state.opacity4, transform: [{translateX: this.state.translateX4}]}]} />
				<Animated.View style={[styles.item, {opacity: this.state.opacity5, transform: [{translateX: this.state.translateX5}]}]} />
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
		margin: 10,
		width: 20,
		height: 20,
		backgroundColor: 'dodgerblue',
		borderRadius: 10,
		position: 'absolute'
	}
})