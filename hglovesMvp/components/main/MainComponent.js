import React from 'react';
import { Dimensions } from 'react-native'
import { StyleSheet, Text, View, TextInput, Animated} from 'react-native';
import { TouchableWithoutFeedback } from "react-native-web";

const ScreenDim = Dimensions.get("window");

class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.moveR = new Animated.ValueXY({x: 10, y: 10});
         this.state = {text: ""};
                //this.moveA = new Animated.ValueXY({x: 10, y: 10});
                this.moveB = new Animated.ValueXY({x: 10, y: 10});
                //this.moveC = new Animated.ValueXY({x: 10, y: 10});
                //this.moveD = new Animated.ValueXY({x: 10, y: 10});
                //this.moveE = new Animated.ValueXY({x: 10, y: 10});
                //this.moveF = new Animated.ValueXY({x: 10, y: 10});
                //this.moveG = new Animated.ValueXY({x: 10, y: 10});
                //this.moveH = new Animated.ValueXY({x: 10, y: 10});
                //this.moveI = new Animated.ValueXY({x: 10, y: 10});
                this.moveJ = new Animated.ValueXY({x: 10, y: 10});
                //this.moveK = new Animated.ValueXY({x: 10, y: 10});
                //this.moveL = new Animated.ValueXY({x: 10, y: 10});
                //this.moveM = new Animated.ValueXY({x: 10, y: 10});
                this.moveN = new Animated.ValueXY({x: 10, y: 10});
                this.moveO = new Animated.ValueXY({x: 10, y: 10});
                //this.moveP = new Animated.ValueXY({x: 10, y: 10});
                //this.moveQ = new Animated.ValueXY({x: 10, y: 10});
                this.moveR = new Animated.ValueXY({x: 10, y: 10});
                //this.moveS = new Animated.ValueXY({x: 10, y: 10});
                //this.moveT = new Animated.ValueXY({x: 10, y: 10});
                this.moveU = new Animated.ValueXY({x: 10, y: 10});
                //this.moveV = new Animated.ValueXY({x: 10, y: 10});
                //this.moveW = new Animated.ValueXY({x: 10, y: 10});
                //this.moveX = new Animated.ValueXY({x: 10, y: 10});
                //this.moveY = new Animated.ValueXY({x: 10, y: 10});
                //this.moveZ = new Animated.ValueXY({x: 10, y: 10});
                this.alphabet = {
                    lorm: [1,
                        {moveB: new Animated.ValueXY({x:10, y:10}),
                         dx: 100,
                         dy: 100,
                        style: "move",
                        letter: "b"},
                        3,4,5,6,7,8,9,this.moveJ,11,12,13,this.moveN,
                        {moveO: new Animated.ValueXY({x:10, y:10}),
                            dx: 10,
                            dy: 10,
                            style: "tap"},
                        16,17,this.moveR,19,20,this.moveU,22,23,24,25,26],
                    letters: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
                };
    }

    moveElement(letter) {
        Animated.spring(this.alphabet.lorm.find(function (elem) {
            if (elem.letter !== undefined && elem.letter === letter.toLowerCase()) {
                if (this.alphabet.lorm.indexOf(elem) !== undefined)
                    return this.alphabet.lorm.indexOf(elem)
            }
        }), {
            toValue: {x: 30, y: 350},
        }).start()
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
                <TextInput
                    placeholder="Bigger is better!"
                    onChangeText={(text) => this.setState({text})}
                    value={this.setState.text}
                />
                <Animated.View style={[styles.circle, this.moveR.getLayout()]}>
                    <TouchableWithoutFeedback style={styles.button} onPress={() => this.moveElement()}>
                    </TouchableWithoutFeedback>
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: '10%',
        flex: 1,
        width: '100%',
        height: '100%',
    },
    circle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        width: 80,
        height: 80,
        borderRadius: 80/2
    },
    button: {
        paddingTop: 24,
        paddingBottom: 24,
    },
});

export default MainComponent;

tab = []

res = tab.find(function(elem) {
    if (elem.letter != undefined && elem.letter == "B")
        return elem
})

if (res != undefined)