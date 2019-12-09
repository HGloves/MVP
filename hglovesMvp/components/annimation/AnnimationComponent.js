import React, {Component, useState } from 'react';
import { Dimensions } from 'react-native'
import { StyleSheet, Text, View, TextInput, Animated, Image, Button} from 'react-native';
import { TouchableWithoutFeedback } from "react-native-web";

const ScreenDim = Dimensions.get("window");

export default class AnnimationComponent extends Component  {
    constructor(props) {
        super(props);
        this.state = {text : "bab"};
        this.lormPos = new Map([
            ["0", {animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({x: 50, y: 100})}],
            ["a", {animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({x: 50, y: 100}), animType: this.staticElement, xEnd: 50, yEnd: 100}],
            ["b", {animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({x: 150, y: 100}), animType: this.moveElement, xStart: 150, yStart: 100, xEnd: 150, yEnd: 250}]
        ]);
    }

    moveElement = (obj, callback) => {
        console.log("mooving", obj.moveAnim.y, obj.yEnd)
        if (obj !== undefined) {
            Animated.sequence([
                Animated.timing(obj.animFade, {
                    toValue: 1,
                    duration: 1000
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
                    toValue: {x: obj.xEnd, y: obj.yEnd},
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
        console.log("Before annimation : " + this.state.text[0])
        obj = this.lormPos.get(this.state.text[0])
        obj.animType(obj , () => {
            this.setState({text : this.state.text.substr(1)}, () => {
                if (this.state.text == "") {
                    console.log("QUIT\n")
                    return;
                }
                console.log (this.state.text + " After\n");
                this.whichLetters();
            });
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.View style={{display: 'flex',
                            transform: [{translateX: this.lormPos.get(this.state.text[0] == undefined ? "0" : this.state.text[0]).moveAnim.x}, {translateY: this.lormPos.get(this.state.text[0] == undefined ? "0" : this.state.text[0]).moveAnim.y}],
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'greenyellow',
                            borderRadius: 200,
                            width: 100,
                            height: 100,
                            opacity: this.lormPos.get(this.state.text[0] == undefined ? "0" : this.state.text[0]).animFade}}>
                </Animated.View>
                <Button
          title="Press me"
          onPress={() => this.whichLetters()} />
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