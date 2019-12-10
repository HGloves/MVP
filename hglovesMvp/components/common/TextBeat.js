import React from 'react'
import { Animated, View } from 'react-native'

class TextBeat extends React.Component {
	constructor(props){
		super(props);
		this.beat = (this.props.beat ? this.props.beat : 1000)
		this.size = (this.props.size ? this.props.size : 2)
		this.duration = (this.props.duration ? this.props.duration * 1000 : 1000)
		this.position = (this.props.position == 'left' || this.props.position == 'right' ? this.props.position : 'center')
		this.nbAnim = 0;
		this.animatedText = new Animated.Value(0);
	}

	componentDidMount() {
		this.Beat()
	}

    componentDidUpdate() {
        this.Beat()
    }

	Beat() {
        this.animatedText.setValue(0)
        Animated.timing(this.animatedText, {
            toValue: 1,
            duration: this.beat,
        }).start()
	}

	render() {
		const scaleValue = this.animatedText.interpolate({
			inputRange: [0,0.5,1],
			outputRange: [1,this.size,1]
		})

		return (
			<View style={[
				{backgroundColor: this.props.backgroundColor},
				this.props.style
			]}>
				<Animated.Text style={[
						{
						textAlign: this.position,
						color: this.props.fontColor}, this.props.textStyle, {transform: [{scale: scaleValue}]}]}>
					{this.props.children}
				</Animated.Text>
			</View>
		)
	}
}

export default TextBeat