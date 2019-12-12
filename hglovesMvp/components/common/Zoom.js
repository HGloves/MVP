import React from 'react'
import { Animated, View } from 'react-native'

export default class ComponentZoom extends React.Component {
	constructor(props){
		super(props);
		this.finalZoom = (this.props.finalZoom ? this.props.finalZoom : 2)
		this.animatedText = new Animated.Value(0);
		this.animatedOpacity = new Animated.Value(0);
		this.initZoom = (this.props.initZoom ? this.props.initZoom : 1);
		this.duration = (this.props.duration ? this.props.duration : 1000)
		this.position = (this.props.position == 'left' || this.props.position == 'right' ? this.props.position : 'center')
	}

	componentDidMount() {
		this.Zoom()
	}

	componentDidUpdate() {
		this.Zoom()
	}

	Zoom() {
		if (this.props.play == true) {
			setTimeout(() => {
				Animated.timing(this.animatedText, {
					toValue: 1,
					duration: this.duration,
				}).start()
				Animated.timing(this.animatedOpacity, {
					toValue: 1,
					duration: this.duration / 2,
				}).start()
			}, this.props.timeout)
		}
	}

	render() {
		const scaleValue = (this.props.midZoom ? this.animatedText.interpolate({
			inputRange: [0,0.5,1],
			outputRange: [this.initZoom, this.props.midZoom, this.finalZoom]
		}) : this.animatedText.interpolate({
			inputRange: [0,1],
			outputRange: [this.initZoom, this.finalZoom]
		}))
		return (
			<View style={[this.props.style, {backgroundColor: this.props.backgroundColor}]}>
				<Animated.View style={[
					{transform: [{scale: scaleValue}],
                    textAlign: this.position,
                    opacity: this.animatedOpacity,
					color: this.props.fontColor},
					this.props.textStyle
				]}>
					{this.props.children}
				</Animated.View>
			</View>
		)
	}
}