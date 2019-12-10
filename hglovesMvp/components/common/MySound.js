import React from 'react'
import { Video } from "expo-av";

export default class MySound extends React.Component {
	render() {
		return (
			<Video
				isMuted={false}
				source={this.props.source}
				shouldPlay={this.props.play}
				isLooping={this.props.loop}
			/>
		)
	}
}