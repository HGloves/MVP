import React, { Component, useState } from 'react';
import { Animated } from 'react-native';

export default class AnnimationComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { text: this.props.text };
        this.lormPos = new Map([
            ["0", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: 50, y: 100 }) }],
            ["a", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: 50, y: 300 }), animType: this.staticElement, xEnd: 50, yEnd: 300 }],
            ["b", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: 230, y: 70 }), animType: this.moveElement, xStart: 230, yStart: 70, xEnd: 230, yEnd: 250 }],
            ["c", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: 375, y: 735 }), animType: this.staticElement, xEnd: 375, yEnd: 735 }],
            ["çTODO", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: 375, y: 735 }), animType: this.staticElement, xEnd: 375, yEnd: 735 }],
            ["d", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: 360, y: 50 }), animType: this.moveElement, xStart: 360, yStart: 50, xEnd: 360, yEnd: 250 }],
            ["e", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: 230, y: 70 }), animType: this.staticElement, xEnd: 230, yEnd: 70 }],
            ["fTODO", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: 360, y: 50 }), animType: this.moveElement, xStart: 360, yStart: 50, xEnd: 360, yEnd: 250 }],
            ["g", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: 490, y: 50 }), animType: this.moveElement, xStart: 490, yStart: 50, xEnd: 470, yEnd: 200 }],
            ["h", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: 600, y: 170 }), animType: this.moveElement, xStart: 600, yStart: 170, xEnd: 555, yEnd: 280 }],
            ["e", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: 360, y: 35 }), animType: this.staticElement, xEnd: 360, yEnd: 35 }],
            ["jTODO", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: 360, y: 35 }), animType: this.staticElement, xEnd: 360, yEnd: 35 }],
            ["kTODO", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: 360, y: 35 }), animType: this.staticElement, xEnd: 360, yEnd: 35 }],
            ["l", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: 360, y: 50 }), animType: this.moveElement, xStart: 360, yStart: 50, xEnd: 360, yEnd: 550 }],
            ["m", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: 480, y: 390 }), animType: this.staticElement, xEnd: 480, yEnd: 390 }],
            ["n", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: 280, y: 380 }), animType: this.staticElement, xEnd: 280, yEnd: 380 }],
            ["o", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: 490, y: 50 }), animType: this.staticElement, xEnd: 490, yEnd: 50 }],
            ["p", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: 190, y: 250 }), animType: this.moveElement, xStart: 190, yStart: 250, xEnd: 190, yEnd: 70 }],
            ["q", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: 555, y: 590 }), animType: this.moveElement, xStart: 555, yStart: 590, xEnd: 555, yEnd: 350 }],
            ["rTODO", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: 555, y: 590 }), animType: this.moveElement, xStart: 555, yStart: 590, xEnd: 555, yEnd: 350 }],
            ["sTODO", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: 555, y: 590 }), animType: this.moveElement, xStart: 555, yStart: 590, xEnd: 555, yEnd: 350 }],
            ["t", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: 80, y: 340 }), animType: this.moveElement, xStart: 60, yStart: 320, xEnd: 170, yEnd: 490 }],
            ["u", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: 600, y: 170 }), animType: this.staticElement, xEnd: 600, yEnd: 170 }],
            ["v", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: 230, y: 570 }), animType: this.staticElement, xEnd: 230, yEnd: 570 }],
            ["wTODO", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: 230, y: 570 }), animType: this.staticElement, xEnd: 230, yEnd: 570 }],
            ["x", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: 250, y: 735 }), animType: this.moveElement, xStart: 250, yStart: 735, xEnd: 500, yEnd: 735 }],
            ["y", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: 280, y: 380 }), animType: this.moveElement, xStart: 280, yStart: 380, xEnd: 490, yEnd: 390 }],
            ["z", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: 380, y: 610 }), animType: this.moveElement, xStart: 380, yStart: 610, xEnd: 490, yEnd: 430 }]
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
                    duration: 400
                }),
                Animated.timing(obj.moveAnim, {
                    toValue: { x: obj.xEnd, y: obj.yEnd },
                    duration: 100
                }),
                Animated.timing(obj.animFade, {
                    toValue: 0,
                    duration: 400
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
                    duration: 400
                }),
                Animated.timing(obj.animFade, {
                    toValue: 0,
                    duration: 400
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
                opacity: this.lormPos.get(this.state.text[0] == undefined ? "0" : this.state.text[0]).animFade,
                zIndex : 2
            }}>
            </Animated.View>
        );
    }
}