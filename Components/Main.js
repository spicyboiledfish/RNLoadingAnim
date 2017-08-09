
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import Loading1 from './Loading1'
import Loading2 from './Loading2'
import Loading3 from './Loading3'
import Loading4 from './Loading4'
import Loading5 from './Loading5'
import Loading6 from './Loading6'
import Loading7 from './Loading7'
import Loading8 from './Loading8'
import Loading9 from './Loading9'

const LoadingAnimations = [
	'Loading Animation 1',
	'Loading Animation 2',
	'Loading Animation 3',
	'Loading Animation 4',
	'Loading Animation 5',
	'Loading Animation 6',
	'Loading Animation 7',
	'Loading Animation 8',
	'Loading Animation 9'
]



class MainComponent extends Component {

	constructor(props) {
		super(props);
		this._nav = this._nav.bind(this)
		this._renderItem = this._renderItem.bind(this)
	}
	static navigationOptions = {
    	title: 'Animation List',
  	}

  	_nav(index) {
  		this.props.navigation.navigate('Loading' + (index + 1))
  	}

	_renderItem({item, index}) {
		return (	
			<TouchableOpacity onPress={() => this._nav(index)}>
				<View style={styles.itemContainer}>
				
					<Text style={styles.itemText}>{item}</Text>
				
				</View>
			</TouchableOpacity>
		)
	}


	render() {
		return (

			<FlatList
			data={LoadingAnimations}
        	renderItem={this._renderItem}
			/>


			)
	}
}

export default Main = StackNavigator({
  	Home: { screen: MainComponent },
  	Loading1: {screen: Loading1},
  	Loading2: {screen: Loading2},
  	Loading3: {screen: Loading3},
  	Loading4: {screen: Loading4},
  	Loading5: {screen: Loading5},
  	Loading6: {screen: Loading6},
  	Loading7: {screen: Loading7},
  	Loading8: {screen: Loading8},
  	Loading9: {screen: Loading9}
  		
});


const styles = StyleSheet.create({
	itemContainer: {
		height: 50,
		paddingLeft: 20,
		justifyContent: 'center',
		borderBottomWidth: 1,
		borderBottomColor: 'lightgray'
	},
	itemText: {
		fontSize: 20
	}
})