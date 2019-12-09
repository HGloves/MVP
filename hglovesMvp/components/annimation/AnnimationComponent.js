import React, {Component, useState } from 'react';
import { Dimensions } from 'react-native'
import { StyleSheet, Text, View, TextInput, Animated} from 'react-native';
import { TouchableWithoutFeedback } from "react-native-web";

const ScreenDim = Dimensions.get("window");

export default class AnnimationComponent extends Component  {
    constructor(props) {
        super(props);
        this.state = {text: ""};
        this.lorm = [1,
            {animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({x: 100, y: 100}), dx: 10, dy: 300, fade: 0, letter: "b"},
            3,4,5,6,7,8,9,10,11,12,13,14,
            {anim: new Animated.ValueXY({x:10, y:10}), dx: 10, dy: 10, fade: 0, letter: 'o'},
            16,17,18,19,20,21,22,23,24,25,26];
    }


    moveElement(letter) {
        console.log("moving");
        let obj = this.lorm.find(function (elem) {
            if (elem.letter !== undefined && elem.letter === letter.toLowerCase())
                return elem
        });
        if (obj !== undefined) {
            Animated.sequence([
                Animated.timing(obj.animFade, {
                    toValue: 1,
                    duration: 1000
                }),
                Animated.timing(obj.moveAnim, {
                    toValue: {x: 100, y: 200},
                    duration: 100
                }),
                Animated.timing(obj.animFade, {
                    toValue: 0,
                    duration: 1000
                })
            ]).start()
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
        return (
            <View style={styles.container}>
                <Animated.View style={{display: 'flex',
                            transform: [{translateX: this.lorm[1].moveAnim.x}, {translateY: this.lorm[1].moveAnim.y}],
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'greenyellow',
                            borderRadius: 200,
                            width: 100,
                            height: 100,
                            opacity: this.lorm[1].animFade}}>
                    <TouchableWithoutFeedback style={styles.button} onPress={() => this.moveElement("b")}>
                        <View>
                            <Text style={styles.buttonText}>Press</Text>
                        </View>
                    </TouchableWithoutFeedback>
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