import React from 'react'
import { Animated, View, Dimensions } from 'react-native'

class MoveComponent extends React.Component {
	constructor(props) {
		super(props);
		this.duration = (this.props.duration ? this.props.duration : 1000)
		this.position = (this.props.position == 'left' || this.props.position == 'right' ? this.props.position : 'center')
		this.animatedText = {y: (this.props.startPos ? new Animated.Value(this.props.startPos.y): new Animated.Value(0)), x: (this.props.startPos ? new Animated.Value(this.props.startPos.x) : new Animated.Value(0))}
		this.state = {
			opacity: 1
		}
	}

	componentDidMount() {
		this.Side()
	}

	componentDidUpdate() {
		this.Side()
	}

	Side() {
        const { dest, play, timeout } = this.props;

		if (play == true) {
			setTimeout(() => {
				if (this.state.opacity === 0)
					this.setState({opacity: 1})
                Animated.timing(this.animatedText.x, {
                    toValue: dest.x,
                    duration: this.duration,
                }).start()
                Animated.timing(this.animatedText.y, {
                    toValue: dest.y,
                    duration: this.duration,
                }).start()
			}, timeout)
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

export default MoveComponent 