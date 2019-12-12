import React from 'react'
import { Animated, View, Dimensions } from 'react-native'

class AppearSide extends React.Component {
	constructor(props) {
		super(props);
		this.duration = (this.props.duration ? this.props.duration : 1000)
		this.position = (this.props.position == 'left' || this.props.position == 'right' ? this.props.position : 'center')
		this.animatedText = this._setAnimatedValue()
		this.state = {
			opacity: 0
		}
	}

	_setAnimatedValue() {
		switch(this.props.start) {
			case 'bottom':
				return ({y: new Animated.Value(Dimensions.get('window').height), x: 0})
			case 'top':
				return ({y: new Animated.Value(-Dimensions.get('window').height), x: 0})
			case 'left':
				return ({y: 0, x: new Animated.Value(-Dimensions.get('window').width)})
			default:
				return ({y: 0, x: new Animated.Value(Dimensions.get('window').width)})
		}
	}

	componentDidMount() {
		this.Side()
	}

	componentDidUpdate() {
		this.Side()
	}

	Side() {
		if (this.props.play == true) {
			setTimeout(() => {
				if (this.state.opacity === 0)
					this.setState({opacity: 1})
				if (this.animatedText.x != 0) {
					Animated.timing(this.animatedText.x, {
						toValue: 0,
						duration: this.duration,
					}).start()
				} else {
					Animated.timing(this.animatedText.y, {
						toValue: 0,
						duration: this.duration,
					}).start()
				}
			}, this.props.timeout)
		}
	}

	render() {
		return (
			<View style={[
					{backgroundColor: this.props.backgroundColor},
					this.props.style
				]}>
				<Animated.View style={[
						{transform: [{translateX: this.animatedText.x},
						{translateY: this.animatedText.y}],
						textAlign: this.position,
						color: this.props.fontColor,
						opacity: this.state.opacity},
						this.props.textStyle
					]}>
					{this.props.children}
				</Animated.View>
			</View>
		)
	}
}

export default AppearSide 