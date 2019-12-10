import React from 'react'
import { Animated, View } from 'react-native'

class TextWink extends React.Component {
	constructor(props) {
		super(props);
		this.duration = (this.props.duration ? this.props.duration : 1000)
		this.position = (this.props.position == 'left' || this.props.position == 'right' ? this.props.position : 'center')
		this.animatedText = (this.props.effect == 'disappear' ? new Animated.Value(1) : new Animated.Value(0));
	}

	componentDidMount() {
		this.Appear()
	}

	componentDidUpdate() {
		this.Appear()
	}

	Appear() {
		Animated.loop(
			Animated.sequence([
				Animated.timing(this.animatedText, {
					toValue: 1,
					duration: this.duration,
				}),
				Animated.timing(this.animatedText, {
					toValue: 0,
					duration: this.duration,
				})
			])
		).start()
	}

	render() {
		return (
			<View style={[this.props.style]}>
				<Animated.Text style={[{
                        opacity: this.animatedText,
						textAlign: this.position,
						color: this.props.fontColor},
						this.props.textStyle
					]}>
					{this.props.children}
				</Animated.Text>
			</View>
		)
	}
}

export default TextWink