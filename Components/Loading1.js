import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Easing
} from 'react-native';

const animToObject = {
      	toValue: 0,
      	easing: Easing.linear,
      	duration: 1000,
    }


export default class Loading1 extends Component{

	constructor(props) {
		super(props);
		this.state = {
			opacity1: new Animated.Value(0),
			opacity2: new Animated.Value(0),
			opacity3: new Animated.Value(0),
			opacity4: new Animated.Value(0),
			opacity5: new Animated.Value(0),
		}
		this._anim1 = this._anim1.bind(this)
		this._anim2 = this._anim2.bind(this)
		this._anim3 = this._anim3.bind(this)
		this._anim4 = this._anim4.bind(this)
		this._anim5 = this._anim5.bind(this)
	}
	static navigationOptions = {
    	title: 'Loaing Animation 1',
  	};

  	componentDidMount() {
  		setTimeout(()=>this.id1=setInterval(this._anim1, 1000), 130)
  		setTimeout(()=>this.id2=setInterval(this._anim2, 1000), 260)
  		setTimeout(()=>this.id3=setInterval(this._anim3, 1000), 390)
  		setTimeout(()=>this.id4=setInterval(this._anim4, 1000), 520)
  		setTimeout(()=>this.id5=setInterval(this._anim5, 1000), 650)
  	}

  	componentWillUnmount() {
  		clearInterval(this.id1)
  		clearInterval(this.id2)
  		clearInterval(this.id3)
  		clearInterval(this.id4)
  		clearInterval(this.id5)
  	}

  	_anim1(){
  		this.state.opacity1.setValue(1)
  		// Animated.timing(this.state.opacity1, animToObject).start(()=>{ //结束调用自身有个缺点-在unmount时无法结束
	   //    this._anim1()
	   //  })
	   Animated.timing(this.state.opacity1, animToObject).start()
  	}
  	_anim2(){
  		this.state.opacity2.setValue(1)
  		Animated.timing(this.state.opacity2, animToObject).start()
  	}

  	_anim3(){
  		this.state.opacity3.setValue(1)
  		Animated.timing(this.state.opacity3, animToObject).start()
  	}

  	_anim4(){
  		this.state.opacity4.setValue(1)
  		Animated.timing(this.state.opacity4, animToObject).start()
  	}

  	_anim5(){
  		this.state.opacity5.setValue(1)
  		Animated.timing(this.state.opacity5, animToObject).start()
  	}

	render(){
		return (
			<View style={styles.container}>
				<Animated.View style={[styles.item, {opacity: this.state.opacity1}]} />
				<Animated.View style={[styles.item, {opacity: this.state.opacity2}]} />
				<Animated.View style={[styles.item, {opacity: this.state.opacity3}]} />
				<Animated.View style={[styles.item, {opacity: this.state.opacity4}]} />
				<Animated.View style={[styles.item, {opacity: this.state.opacity5}]} />
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
		borderRadius: 10
	}
})