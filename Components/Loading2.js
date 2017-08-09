import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Easing
} from 'react-native';

const animToObject = {
      	toValue: 0.2,
      	easing: Easing.linear,
      	duration: 1040,
    }

export default class Loading2 extends Component{

	constructor(props) {
		super(props);
		this.state = {
			opacity1: new Animated.Value(0.2),
			opacity2: new Animated.Value(0.2),
			opacity3: new Animated.Value(0.2),
			opacity4: new Animated.Value(0.2),
			opacity5: new Animated.Value(0.2),
			opacity6: new Animated.Value(0.2),
			opacity7: new Animated.Value(0.2),
			opacity8: new Animated.Value(0.2),
		}
		this._anim1 = this._anim1.bind(this)
		this._anim2 = this._anim2.bind(this)
		this._anim3 = this._anim3.bind(this)
		this._anim4 = this._anim4.bind(this)
		this._anim5 = this._anim5.bind(this)
		this._anim6 = this._anim6.bind(this)
		this._anim7 = this._anim7.bind(this)
		this._anim8 = this._anim8.bind(this)
	}
	static navigationOptions = {
    	title: 'Loaing Animation 2',
  	};

  	componentDidMount() {
  		setTimeout(this._anim1, 130)
  		setTimeout(this._anim2, 260)
  		setTimeout(this._anim3, 390)
  		setTimeout(this._anim4, 520)
  		setTimeout(this._anim5, 650)
  		setTimeout(this._anim6, 780)
  		setTimeout(this._anim7, 910)
  		setTimeout(this._anim8, 1040)
  	}

  	_anim1(){
  		this.state.opacity1.setValue(1)
  		Animated.timing(this.state.opacity1, animToObject).start(()=>{
	      this._anim1()
	    })
  	}
  	_anim2(){
  		this.state.opacity2.setValue(1)
  		Animated.timing(this.state.opacity2, animToObject).start(()=>{
	      this._anim2()
	    })
  	}

  	_anim3(){
  		this.state.opacity3.setValue(1)
  		Animated.timing(this.state.opacity3, animToObject).start(()=>{
	      this._anim3()
	    })
  	}

  	_anim4(){
  		this.state.opacity4.setValue(1)
  		Animated.timing(this.state.opacity4, animToObject).start(()=>{
	      this._anim4()
	    })
  	}

  	_anim5(){
  		this.state.opacity5.setValue(1)
  		Animated.timing(this.state.opacity5, animToObject).start(()=>{
	      this._anim5()
	    })
  	}

  	_anim6(){
  		this.state.opacity6.setValue(1)
  		Animated.timing(this.state.opacity6, animToObject).start(()=>{
	      this._anim6()
	    })
  	}

  	_anim7(){
  		this.state.opacity7.setValue(1)
  		Animated.timing(this.state.opacity7, animToObject).start(()=>{
	      this._anim7()
	    })
  	}

  	_anim8(){
  		this.state.opacity8.setValue(1)
  		Animated.timing(this.state.opacity8, animToObject).start(()=>{
	      this._anim8()
	    })
  	}


	render(){
		return (
			<View style={styles.container}>
				<View style={styles.itemContainer}>
					<Animated.View style={[styles.item, styles.item1, {opacity: this.state.opacity1}]} />
					<Animated.View style={[styles.item, styles.item2, {opacity: this.state.opacity2}]} />
					<Animated.View style={[styles.item, styles.item3, {opacity: this.state.opacity3}]} />
					<Animated.View style={[styles.item, styles.item4, {opacity: this.state.opacity4}]} />
					<Animated.View style={[styles.item, styles.item5, {opacity: this.state.opacity5}]} />
					<Animated.View style={[styles.item, styles.item6, {opacity: this.state.opacity6}]} />
					<Animated.View style={[styles.item, styles.item7, {opacity: this.state.opacity7}]} />
					<Animated.View style={[styles.item, styles.item8, {opacity: this.state.opacity8}]} />
				</View>
			</View>


			)
	}
}

const styles = StyleSheet.create({
	itemContainer: {
		width: 100,
		height: 100,
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row'
	},
	item: {
		width: 30,
		height: 10,
		backgroundColor: 'dodgerblue',
		borderRadius: 5,
		position: 'absolute'
	},
	item1: {
		left: 0,
		top: '50%',
		marginTop: -5,
		transform: [ { rotateZ: '0deg'}]
	},
	item2: {
		left: 10,
		top: 20,
		transform: [ { rotateZ: '45deg'}]
	},
	item3: {
		left: '50%',
		top: 10,
		marginLeft: -15,
		transform: [ { rotateZ: '90deg'}]
	},
	item4: {
		right: 10,
		top: 20,
		transform: [ { rotateZ: '135deg'}]
	},
	item5: {
		right: 0,
		top: '50%',
		marginTop: -5,
		transform: [ { rotateZ: '180deg'}]
	},
	item6: {
		right: 10,
		bottom: 20,
		transform: [ { rotateZ: '225deg'}]
	},
	item7: {
		left: '50%',
		bottom: 10,
		marginLeft: -15,
		transform: [ { rotateZ: '270deg'}]
	},
	item8: {
		left: 10,
		bottom: 20,
		transform: [ { rotateZ: '315deg'}]
	}
})