import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Easing
} from 'react-native';

const animToObject = {
        toValue: 80,
        //easing: Easing.linear,
        duration: 1040,
    }

const animBackObject = {
    toValue: 40,
    //easing: Easing.linear,
    duration: 1040,
}


export default class Loading9 extends Component{

	constructor(props) {
		super(props);
		this.state = {
			height1: new Animated.Value(40),
      height2: new Animated.Value(40),
      height3: new Animated.Value(40),
      height4: new Animated.Value(40),
      height5: new Animated.Value(40),
		}
		this._anim1 = this._anim1.bind(this)
    this._anim2 = this._anim2.bind(this)
    this._anim3 = this._anim3.bind(this)
    this._anim4 = this._anim4.bind(this)
    this._anim5 = this._anim5.bind(this)
	}
	static navigationOptions = {
    	title: 'Loaing Animation 9',
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
          Animated.timing(this.state.height1, animToObject),
          Animated.timing(this.state.height1, animBackObject)
      ]).start(()=>{
        this._anim1()
      })
  }

  _anim2(){
      Animated.sequence([
          Animated.timing(this.state.height2, animToObject),
          Animated.timing(this.state.height2, animBackObject)
      ]).start(()=>{
        this._anim2()
      })
  }

  _anim3(){
      Animated.sequence([
          Animated.timing(this.state.height3, animToObject),
          Animated.timing(this.state.height3, animBackObject)
      ]).start(()=>{
        this._anim3()
      })
  }

  _anim4(){
      Animated.sequence([
          Animated.timing(this.state.height4, animToObject),
          Animated.timing(this.state.height4, animBackObject)
      ]).start(()=>{
        this._anim4()
      })
  }

  _anim5(){
      Animated.sequence([
          Animated.timing(this.state.height5, animToObject),
          Animated.timing(this.state.height5, animBackObject)
      ]).start(()=>{
        this._anim5()
      })
  }
  	

	render(){
		return (
			<View style={styles.container}>
				<Animated.View style={[styles.item, {height: this.state.height1}]} />
        <Animated.View style={[styles.item, {height: this.state.height2}]}/>
        <Animated.View style={[styles.item, {height: this.state.height3}]}/>
        <Animated.View style={[styles.item, {height: this.state.height4}]}/>
        <Animated.View style={[styles.item, {height: this.state.height5}]}/>
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
		borderRadius: 4,
    width: 8,
    margin: 5
	}
})