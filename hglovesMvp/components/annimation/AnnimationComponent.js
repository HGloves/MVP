import React, {Component} from 'react';
import {Animated, Dimensions, StyleSheet, Text, View} from 'react-native'
import {TouchableWithoutFeedback} from "react-native-web";

const ScreenDim = Dimensions.get("window");

export default class AnnimationComponent extends Component  {
    constructor(props) {
        super(props);
        this.state = {text: ""};
        this.trx = undefined;
        this.try = undefined;
        this.Spos = {x: 200, y: 200 };
        this.lorm = [1,
            {animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({x: 100, y: 100}), dx: 10, dy: 300, fade: 0, letter: "b"},
            3,4,5,6,7,8,9,10,11,12,13,14,
            {animFade: new Animated.Value(0), moveAnim: new Animated.Value(10), dx: 10, dy: 10, fade: 0, letter: 'o'},
            16,17,18,
            {animFade: new Animated.Value(0), moveAnim: new Animated.Value(0), dx: 200, dy: 200, fade: 0, letter: "s"},
            20,21,22,23,24,25,26];
        let range = 1, snapshot = 200, radius = 100;
        /// translateX
        let inputRangeX = [], outputRangeX = [];
        for (let i=0; i<=snapshot; ++i) {
            let value = i/snapshot;
            let move = Math.sin(value * Math.PI * 2) * radius + this.Spos.x;
            inputRangeX.push(value);
            outputRangeX.push(move);
        }
        this.trx = this.lorm[18].moveAnim.interpolate({ inputRange: inputRangeX, outputRange: outputRangeX });
        /// translateY
        let inputRangeY = [], outputRangeY = [];
        for (let i=0; i<=snapshot; ++i) {
            let value = i/snapshot;
            let move = -Math.cos(value * Math.PI * 2) * radius + this.Spos.y;
            inputRangeY.push(value);
            outputRangeY.push(move);
        }
        this.try = this.lorm[18].moveAnim.interpolate({ inputRange: inputRangeY, outputRange: outputRangeY });
    }

    findElem(letter) {
        return this.lorm.find(function (elem) {
            if (elem.letter !== undefined && elem.letter === letter.toLowerCase())
                return elem
        });
    }

    moveElement(letter) {
        console.log("moving");
        let obj = this.lorm.find(function (elem) {
            if (elem.letter !== undefined && elem.letter === letter.toLowerCase())
                return elem
        });
        if (obj !== undefined && obj.letter !== "s") {
            Animated.sequence([
                Animated.timing(obj.animFade, {
                    toValue: 1,
                    duration: 200
                }),
                Animated.timing(obj.moveAnim, {
                    toValue: {x: obj.dx, y: obj.dy},
                    duration: 100
                }),
                Animated.timing(obj.animFade, {
                    toValue: 0,
                    duration: 200
                })
            ]).start()
        }
        if (obj.letter === "s") {
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
            ]).start();
        }
    }

    /*   whichLetters() {
           if (this.state.text.length > 0) {
               let word = this.state.text.split("");
               for (let i = 0; word.length > i;i++) {
                   console.log("lette r: " + word[i].toLowerCase() + " = lorm: " + this.alphabet.lorm[this.alphabet.letters.indexOf(word[i].toLowerCase())]);
               }
           }
       };, opacity: this.fadeAnim*/

    render() {
        const transform = [{ translateY: this.try }, {translateX: this.trx}];
        return (
            <View style={styles.container}>
                <Animated.View style={{display: 'flex',
                            transform,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'greenyellow',
                            borderRadius: 200,
                            width: 100,
                            height: 100,
                            opacity: this.findElem("b").animFade}}>
                </Animated.View>

                <TouchableWithoutFeedback style={styles.button} onPress={() => this.moveElement("b")}>
                        <View>
                            <Text style={styles.buttonText}>Press</Text>
                        </View>
                    </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
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