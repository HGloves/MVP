import React, {Component, useState } from 'react';
import { Dimensions } from 'react-native'
import { StyleSheet, Animated, View } from 'react-native';
const ScreenDim = Dimensions.get("window");

export default class AnnimationComponent extends Component  {
    constructor(props) {
        super(props);
        console.log("animation");
        this.state = {text : this.props.text,
            imageHandX: -1,
            imageHandY: -1,
            imageHandWidth: -1,
            imageHandHeight: -1
        };
        this.lormPos = new Map([
            ["0", {animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({x: 50, y: 100})}],
            ["a", {animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({x: 12 , y: 45}), animType: this.staticElement, xEnd: 12, yEnd: 45}],
            ["b", {animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({x: 50, y: 150}), animType: this.moveElement, xStart: 150, yStart: 100, xEnd: 150, yEnd: 250}],
            ["s", {animFade: new Animated.Value(0), moveAnim: new Animated.Value(0), animType: this.circleElement, xStart: 150, yStart: 500, xEnd: 200, yEnd: 200}]
        ]);
        let snapshot = 200, radius = 100;
        let inputRangeX = [], outputRangeX = [];
        for (let i=0; i<=snapshot; ++i) {
            let value = i/snapshot;
            let move = Math.sin(value * Math.PI * 2) * radius + this.lormPos.get("s").xStart;
            inputRangeX.push(value);
            outputRangeX.push(move);
        }
        this.trx = this.lormPos.get("s").moveAnim.interpolate({ inputRange: inputRangeX, outputRange: outputRangeX });
        let inputRangeY = [], outputRangeY = [];
        for (let i=0; i<=snapshot; ++i) {
            let value = i/snapshot;
            let move = -Math.cos(value * Math.PI * 2) * radius + this.lormPos.get("s").yStart;
            inputRangeY.push(value);
            outputRangeY.push(move);
        }
        this.try = this.lormPos.get("s").moveAnim.interpolate({ inputRange: inputRangeY, outputRange: outputRangeY });
    }

    componentDidMount = () => {
        this.whichLetters();
    }

    moveElement = (obj, callback) => {
        console.log("mooving", obj.moveAnim.y, obj.yEnd);
        if (obj !== undefined) {
            Animated.sequence([
                Animated.timing(obj.animFade, {
                    toValue: 1,
                    duration: 200
                }),
                Animated.timing(obj.moveAnim, {
                    toValue: {x: obj.xEnd, y: obj.yEnd},
                    duration: 100
                }),
                Animated.timing(obj.animFade, {
                    toValue: 0,
                    duration: 1000
                }),
                Animated.timing(obj.moveAnim, {
                    toValue: {x: obj.xStart, y: obj.yStart},
                    duration: 100
                })
            ]).start(callback)
        }
    }

    staticElement = (obj, callback) => {
        console.log("fade")
        if (obj !== undefined) {
            Animated.sequence([
                Animated.timing(obj.moveAnim, {
                    toValue: {x: (obj.xEnd * ScreenDim.width) / 100, y: (obj.yEnd * ScreenDim.height) / 100},
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
    };

    circleElement = (obj, callback) => {
        console.log("circle");
        obj.moveAnim.setValue(0);
        obj.animFade.setValue(0);
        Animated.sequence([
            Animated.timing(obj.animFade, {
                toValue: 1,
                duration: 200
            }),
            Animated.timing(obj.moveAnim, {
                toValue: 1,
                duration: 1000,
                }),
            Animated.timing(obj.animFade, {
                toValue: 0,
                duration: 200
            }),
        ]).start(callback);
    };

    whichLetters = () => {
        console.log("Before annimation : " + this.state.text[0]);
        obj = this.lormPos.get(this.state.text[0]);
        obj.animType(obj , () => {
            this.setState({text : this.state.text.substr(1)}, () => {
                if (this.state.text === "") {
                    console.log("QUIT\n");
                    return;
                }
                console.log (this.state.text + " After\n");
                this.whichLetters();
            });
        });
    };

    render() {
        const transformS = [{ translateY: this.try }, {translateX: this.trx}];
        return (
            <View ref={view => { this.annimationComponent = view; }}>
            <Animated.View style={{display: 'flex',
                        transform: (this.state.text[0] !== "s" ?  [{translateX: this.lormPos.get(this.state.text[0] === undefined ? "0" : this.state.text[0]).moveAnim.x}, {translateY: this.lormPos.get(this.state.text[0] === undefined ? "0" : this.state.text[0]).moveAnim.y}] : transformS),
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'greenyellow',
                        borderRadius: 200,
                        width: 100,
                        height: 100,
                        opacity: this.lormPos.get(this.state.text[0] === undefined ? "0" : this.state.text[0]).animFade}}>
            </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
    },
    handContainer: {
        width: '100%',
        height: '78%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    tennisBall: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'greenyellow',
        borderRadius: 100,
        width: 100,
        height: 100,
    },
    button: {
        paddingTop: 24,
        paddingBottom: 24,
    },
    buttonText: {
        fontSize: 24,
        color: '#333',
    }
});