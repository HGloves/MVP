import React, { Component } from 'react';
import { StyleSheet, Animated} from 'react-native';

export default class AnimatedDot extends Component  {

    constructor(props) {
        super(props);
        this.state = {
            animFade: new Animated.Value(1),
            moveAnim: new Animated.ValueXY({ x: 0, y: 0 }),
        }
        this.radius = 40
    }

    componentDidMount() {
        console.log("Mount a AnimatedDot")
        this.staticElement()
//        this.interval = setInterval(this.staticElement, 1000);
    }

    animatedCallback = () => {
        console.log("Animation done");
        this.props.endAnimation(this.props.id)
    }

    staticElement = () => {
        console.log("fade")
        Animated.sequence([
            // Animated.timing(this.state.moveAnim, {
            //     toValue: {x: this.state.moveAnim.x, y: this.state.moveAnim.y},
            //     duration: 100
            // }),
            Animated.timing(this.state.animFade, {
                toValue: 0,
                duration: 1000,
            }).start(this.animatedCallback)
        ])
    }

    render() {
        return (
            <Animated.View style={{display: 'flex',
                        position: 'absolute',
                        transform: [{translateY: this.props.posY - this.radius / 2}, {translateX: this.props.posX - this.radius / 2}],
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#1C3956',
                        borderRadius: 200,
                        width: this.radius,
                        height: this.radius,
                        zIndex : 3,
                        opacity: this.state.animFade}}>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({});
