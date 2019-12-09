import React, {Component} from 'react';
import {Animated, Dimensions, StyleSheet, Text, View} from 'react-native'
import {TouchableWithoutFeedback} from "react-native-web";

const ScreenDim = Dimensions.get("window");

export default class AnnimationComponent extends Component  {
    constructor(props) {
        super(props);
        this.state = {text: ""};
        this.lorm = [1,
            {anim: new Animated.ValueXY({x:10, y:10}), dx: 10, dy: 300, letter: "b"},
            3,4,5,6,7,8,9,10,11,12,13,14,
            {anim: new Animated.ValueXY({x:10, y:10}), dx: 10, dy: 10, letter: 'o'},
            16,17,18,19,20,21,22,23,24,25,26]
    }

    findElement(letter) {
        return this.lorm.find(function (elem) {
            if (elem.letter !== undefined && elem.letter === letter.toLowerCase()) {
                console.log(elem);
                return elem
            }
        });
    }

    moveElement(obj) {
        console.log("moving");
        if (obj !== undefined) {
            Animated.sequence([
                Animated.spring(obj.anim, {
                    toValue: {x: obj.dx, y: obj.dy},
                }),
            ]).start();
            console.log("end of sequence");
        }
    }

    /*   whichLetters() {
           if (this.state.text.length > 0) {
               let word = this.state.text.split("");
               for (let i = 0; word.length > i;i++) {
                   console.log("lette r: " + word[i].toLowerCase() + " = lorm: " + this.alphabet.lorm[this.alphabet.letters.indexOf(word[i].toLowerCase())]);
               }
           }
       };*/

    render() {
        return (
            <View style={styles.container}>
                <Animated.View style={[styles.tennisBall, this.findElement("b").anim.getLayout()]}>
                    <TouchableWithoutFeedback style={styles.button} onPress={() => this.moveElement(this.findElement("b"))}>
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