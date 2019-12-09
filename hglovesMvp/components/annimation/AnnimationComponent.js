import React, { Component, useState } from 'react';
import { Animated } from 'react-native';

export default class AnnimationComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { text: this.props.text };
        this.lormPos = new Map([
            ["0", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: 50, y: 100 }) }],
            ["a", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: 50, y: 100 }), animType: this.staticElement, xEnd: 50, yEnd: 100 }],
            ["b", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: 150, y: 100 }), animType: this.moveElement, xStart: 150, yStart: 100, xEnd: 150, yEnd: 250 }]
        ]);
    }

    componentDidMount = () => {
        this.whichLetters()
    }

    moveElement = (obj, callback) => {
        if (obj !== undefined) {
            Animated.sequence([
                Animated.timing(obj.animFade, {
                    toValue: 1,
                    duration: 1000
                }),
                Animated.timing(obj.moveAnim, {
                    toValue: { x: obj.xEnd, y: obj.yEnd },
                    duration: 100
                }),
                Animated.timing(obj.animFade, {
                    toValue: 0,
                    duration: 1000
                }),
                Animated.timing(obj.moveAnim, {
                    toValue: { x: obj.xStart, y: obj.yStart },
                    duration: 100
                })
            ]).start(callback)
        }
    }

    staticElement = (obj, callback) => {
        if (obj !== undefined) {
            Animated.sequence([
                Animated.timing(obj.moveAnim, {
                    toValue: { x: obj.xEnd, y: obj.yEnd },
                    duration: 100
                }),
                Animated.timing(obj.animFade, {
                    toValue: 1,
                    duration: 1000
                }),
                Animated.timing(obj.animFade, {
                    toValue: 0,
                    duration: 1000
                })
            ]).start(callback)
        }
    }

    whichLetters = () => {
        obj = this.lormPos.get(this.state.text[0])
        obj.animType(obj, () => {
            this.setState({ text: this.state.text.substr(1) }, () => {
                if (this.state.text == "") {
                    this.props.stopAnimation()
                    return;
                }
                this.whichLetters();
            });
        });
    }

    render() {
        return (
            <Animated.View style={{
                transform: [{ translateX: this.lormPos.get(this.state.text[0] == undefined ? "0" : this.state.text[0]).moveAnim.x }, { translateY: this.lormPos.get(this.state.text[0] == undefined ? "0" : this.state.text[0]).moveAnim.y }],
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                backgroundColor: 'greenyellow',
                borderRadius: 200,
                width: 100,
                height: 100,
                opacity: this.lormPos.get(this.state.text[0] == undefined ? "0" : this.state.text[0]).animFade
            }}>
            </Animated.View>
        );
    }
}