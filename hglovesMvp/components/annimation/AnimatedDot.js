import React, { Component } from 'react';
import { Dimensions } from 'react-native'
import { StyleSheet, Animated, } from 'react-native';

export default class AnimatedDot extends Component  {

    constructor(props) {
        super(props);
        this.state = {
            animFade: new Animated.Value(1),
            moveAnim: new Animated.ValueXY({ x: 0, y: 0 }),
            updateAnimVariatble: 1,
        }
        this.radius = Dimensions.get("window").width / 20;
    }

    componentDidMount() {
        console.log("Mount a AnimatedDot")
        this.staticElement()

    }

    animatedCallback = () => {
        console.log("Animation done");
        this.props.endAnimation(this.props.id)
    }

    staticElement = () => {
        console.log("fade")
        Animated.sequence([
            Animated.timing(this.state.animFade, {
                toValue: 0,
                duration: 500,
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
