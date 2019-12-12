import React from 'react'
import {Text} from "react-native"

export default class MyChrono extends React.Component {
    componentDidMount() {
        const Stopwatch = require('statman-stopwatch');
        this.stopwatch = new Stopwatch();
        this.stopwatch.start()
    }
    state = {
        time: 0
    }

    componentDidUpdate() {
        this.TIME()
    }
    TIME() {
        if (this.stopwatch) {
            this.setState({
                time: this.stopwatch.read()
            },
            () => setTimeout(this.TIME(), 1000)
            )
        }
    }
    render() {
		return (
            <Text>{this.state.time}</Text>
        )
    }
}