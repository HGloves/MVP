import React, {Component } from 'react';
import { Dimensions } from 'react-native'
import { StyleSheet, Animated, View } from 'react-native';
const ScreenDim = Dimensions.get("window");
const imageWidth = ScreenDim.width * 90 / 100;
const imageHeight = Math.round(imageWidth * 2400 / 1920);

export default class AnnimationComponent extends Component  {
    constructor(props) {
        super(props);
        console.log("animation");
        this.state = {text : this.props.text};
        this.lormPos = new Map([
            ["0", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: 50, y: 100 }), anim2: new Animated.ValueXY({ x: 50, y: 100 }), anim3: new Animated.ValueXY({ x: 50, y: 100 }), anim4: new Animated.ValueXY({ x: 50, y: 100 }), anim5: new Animated.ValueXY({ x: 50, y: 100 }), animType: this.staticElement}],
            ["a", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: (8.5 * imageWidth) / 100, y: (45 * imageHeight) / 100 }), animType: this.staticElement }],
            ["b", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: (30 * imageWidth) / 100, y: (15 * imageHeight) / 100 }), animType: this.moveElement, xStart: (30 * imageWidth) / 100, yStart: (15 * imageHeight) / 100, xEnd: (35 * imageWidth) / 100, yEnd: (45 * imageHeight) / 100 }],
            ["c", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: (55 * imageWidth) / 100, y: (90 * imageHeight) / 100 }), animType: this.staticElement }],
            ["ç", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: 10, y: 10 }), anim2: new Animated.ValueXY({ x: 50, y: 50 }), animType: this.staticElement }],
            ["d", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: (48 * imageWidth) / 100, y: (10 * imageHeight) / 100 }), animType: this.moveElement, xStart: (48 * imageWidth) / 100, yStart: (10 * imageHeight) / 100, xEnd: (48 * imageWidth) / 100, yEnd: (45 * imageHeight) / 100 }],
            ["e", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: (30 * imageWidth) / 100, y: (15 * imageHeight) / 100 }), animType: this.staticElement}],
            ["fTODO", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: 360, y: 50 }), anim2: new Animated.ValueXY({ x: 50, y: 100 }), animType: this.staticElement }],
            ["i", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: (48 * imageWidth) / 100, y: (10 * imageHeight) / 100 }), animType: this.staticElement }],
            ["jTODO", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: 360, y: 35 }), anim2: new Animated.ValueXY({ x: 50, y: 100 }), animType: this.staticElement}],
            ["kTODO", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: 360, y: 35 }), anim2: new Animated.ValueXY({ x: 50, y: 100 }), anim3: new Animated.ValueXY({ x: 50, y: 100 }), anim4: new Animated.ValueXY({ x: 50, y: 100 }), animType: this.staticElement }],
            ["m", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: (75 * imageWidth) / 100, y: (50 * imageHeight) / 100 }), animType: this.staticElement }],
            ["n", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: (35 * imageWidth) / 100, y: (45 * imageHeight) / 100 }), animType: this.staticElement }],
            ["o", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: (68 * imageWidth) / 100, y: (13 * imageHeight) / 100 }), animType: this.staticElement }],
            ["r", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: 5, y: 100 }), animType: this.rLetterMove, xFirst: 30, yFirst: 100, xSecond: 70, ySecond: 100, xThird: 100, yThird: 100, xEnd: 140, yEnd: 100 }],//RRR
            ["u", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: (85 * imageWidth) / 100, y: (30 * imageHeight) / 100 }), animType: this.staticElement }],
            ["v", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: (25 * imageWidth) / 100, y: (80 * imageHeight) / 100 }), animType: this.staticElement }],
            ["wTODO", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: 230, y: 570 }), anim2: new Animated.ValueXY({ x: 230, y: 570 }), animType: this.staticElement }],
            [" ", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: 50, y: 100 }), anim2: new Animated.ValueXY({ x: 50, y: 100 }), anim3: new Animated.ValueXY({ x: 50, y: 100 }), anim4: new Animated.ValueXY({ x: 50, y: 100 }), anim5: new Animated.ValueXY({ x: 50, y: 100 }), animType: this.staticElement}],
            ["g", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: (68 * imageWidth) / 100, y: (13 * imageHeight) / 100 }), animType: this.moveElement, xStart: (68 * imageWidth) / 100, yStart: (13 * imageHeight) / 100, xEnd: (62 * imageWidth) / 100, yEnd: (45 * imageHeight) / 100  }],
            ["h", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: (85 * imageWidth) / 100, y: (30 * imageHeight) / 100 }), animType: this.moveElement, xStart: (85 * imageWidth) / 100, yStart: (30 * imageHeight) / 100, xEnd: (75 * imageWidth) / 100, yEnd: (50 * imageHeight) / 100 }],
            ["l", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: (48 * imageWidth) / 100, y: (10 * imageHeight) / 100 }), animType: this.moveElement, xStart: (48 * imageWidth) / 100, yStart: (10 * imageHeight) / 100, xEnd: (50 * imageWidth) / 100, yEnd: (90 * imageHeight) / 100 }],
            ["p", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: (25 * imageWidth) / 100, y: (45 * imageHeight) / 100 }), animType: this.moveElement, xStart: (25 * imageWidth) / 100, yStart: (45 * imageHeight) / 100, xEnd: (20 * imageWidth) / 100, yEnd: (15 * imageHeight) / 100 }],
            ["q", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: (72 * imageWidth) / 100, y: (92 * imageHeight) / 100 }), animType: this.moveElement, xStart: (72 * imageWidth) / 100, yStart: (92 * imageHeight) / 100, xEnd: (66 * imageHeight) / 100, yEnd: (60 * imageHeight) / 100 }],
            ["rTODO", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: 555, y: 590 }), animType: this.moveElement, xStart: 555, yStart: 590, xEnd: 555, yEnd: 350 }],
            ["s", {animFade: new Animated.Value(0), anim1: new Animated.Value(0), animType: this.circleElement, xStart:(50 * imageWidth) / 100, yStart: (70 * imageHeight) / 100, xEnd: (50 * imageWidth) / 100, yEnd: (70 * imageHeight) / 100}],
            ["t", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: (17 * imageWidth) / 100, y: (60 * imageHeight) / 100 }), animType: this.moveElement, xStart: (17 * imageWidth) / 100, yStart: (60 * imageHeight) / 100, xEnd: (6 * imageWidth) / 100, yEnd: (45 * imageHeight) / 100 }],
            ["x", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: (38 * imageWidth) / 100, y: (90 * imageHeight) / 100 }), animType: this.moveElement, xStart: (38 * imageWidth) / 100, yStart: (90 * imageHeight) / 100, xEnd: (67 * imageWidth) / 100, yEnd: (90 * imageHeight) / 100 }],
            ["y", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: (35 * imageWidth) / 100, y: (45 * imageHeight) / 100 }), animType: this.moveElement, xStart: (35 * imageWidth) / 100, yStart: (45 * imageHeight) / 100, xEnd: (75 * imageWidth) / 100, yEnd: (50 * imageHeight) / 100 }],
            ["z", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: (50 * imageWidth) / 100, y: (80 * imageHeight) / 100 }), animType: this.moveElement, xStart: (50 * imageWidth) / 100, yStart: (80 * imageHeight) / 100, xEnd: (70 * imageWidth) / 100, yEnd: (65 * imageHeight) / 100 }]
        ]);
        let snapshot = 200, radius = (17 * imageWidth) / 100;
        let inputRangeX = [], outputRangeX = [];
        for (let i=0; i<=snapshot; ++i) {
            let value = i/snapshot;
            let move = Math.sin(value * Math.PI * 2) * radius + this.lormPos.get("s").xStart;
            inputRangeX.push(value);
            outputRangeX.push(move);
        }
        this.trx = this.lormPos.get("s").anim1.interpolate({ inputRange: inputRangeX, outputRange: outputRangeX });
        let inputRangeY = [], outputRangeY = [];
        for (let i=0; i<=snapshot; ++i) {
            let value = i/snapshot;
            let move = -Math.cos(value * Math.PI * 2) * radius + this.lormPos.get("s").yStart;
            inputRangeY.push(value);
            outputRangeY.push(move);
        }
        this.try = this.lormPos.get("s").anim1.interpolate({ inputRange: inputRangeY, outputRange: outputRangeY });
    }

    componentDidMount = () => {
        this.whichLetters();
    }

    fadeElement = (obj, fade) => {
        return (Animated.timing(obj.animFade, {
            toValue: fade,
            duration: 400
        }));
    };

    moveElement = (obj, callback) => {
        console.log("mooving", obj.anim1.y, obj.yEnd);
        if (obj !== undefined) {
            Animated.sequence([
                this.fadeElement(obj, 1),
                Animated.timing(obj.anim1, {
                    toValue: {x: obj.xEnd, y: obj.yEnd},
                    duration: 100
                }),
                this.fadeElement(obj, 0),
                Animated.timing(obj.anim1, {
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
                this.fadeElement(obj, 1),
                this.fadeElement(obj, 0)
            ]).start(callback)
        }
    };

    circleElement = (obj, callback) => {
        console.log("circle");
        obj.anim1.setValue(0);
        obj.animFade.setValue(0);
        Animated.sequence([
            Animated.timing(obj.animFade, {
                toValue: 1,
                duration: 200
            }),
            Animated.timing(obj.anim1, {
                toValue: 1,
                duration: 1000,
                }),
            Animated.timing(obj.animFade, {
                toValue: 0,
                duration: 200
            }),
        ]).start(callback);
    };

    rLetterMove = (obj, callback) => {
        console.log("r letter");
        Animated.sequence([
            this.fadeElement(obj, 1),
            this.fadeElement(obj, 0),
            Animated.timing(obj.anim1, {
                toValue: {x: obj.xSecond, y: obj.ySecond},
                duration: 100
            }),
            this.fadeElement(obj, 1),
            this.fadeElement(obj, 0),
            Animated.timing(obj.anim1, {
                toValue: {x: obj.xThird, y: obj.yThird},
                duration: 100
            }),
            this.fadeElement(obj, 1),
            this.fadeElement(obj, 0),
            Animated.timing(obj.anim1, {
                toValue: {x: obj.xEnd, y: obj.yEnd},
                duration: 100
            }),
            this.fadeElement(obj, 1),
            this.fadeElement(obj, 0),
            Animated.timing(obj.anim1, {
                toValue: {x: obj.xFirst, y: obj.yFirst},
                duration: 100
            })
        ]).start(callback);
    };

    whichLetters = () => {
        if (this.state.text[0] === undefined || this.lormPos.has(this.state.text[0]) == false) {
            this.setState({text : this.state.text.substr(1)}, () => {
                if (this.state.text === "")
                    return;
                this.whichLetters();
            });
            return;
        }
        obj = this.lormPos.get(this.state.text[0]);
        obj.animType(obj , () => {
            this.setState({text : this.state.text.substr(1)}, () => {
                if (this.state.text === "") {
                    return;
                }
                this.whichLetters();
            });
        });
    };

    getLetter = (nbr) => {
        if (this.state.text[0] === undefined || this.lormPos.has(this.state.text[0]) == false)
            return "0";
        if (nbr == 1)
            return this.state.text[0];
        if (nbr == 2 && (this.state.text[0] == "k" || this.state.text[0] == "ç" || this.state.text[0] == "f" || this.state.text[0] == "w" || this.state.text[0] == " "))
            return this.state.text[0];
        if (nbr == 4 && (this.state.text[0] == "k" || this.state.text[0] == " "))
            return this.state.text[0];
        if (nbr == 5 && this.state.text[0] == " ")
            return this.state.text[0];
        return "0";
    };

    render() {
        const transformS = [{ translateY: this.try }, {translateX: this.trx}];
        return (
            <View>
                <Animated.View style={{display: 'flex',
                    transform: (this.state.text[0] !== "s" ? [{translateX: this.lormPos.get(this.getLetter(1)).anim1.x}, {translateY: this.lormPos.get(this.getLetter(1)).anim1.y}] : transformS),
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#1C3956',
                    borderRadius: 20 * imageWidth / 100,
                    width: 10 * imageWidth / 100,
                    height: 10 * imageWidth / 100,
                    position: "absolute",
                    zIndex : 2,
                    opacity: this.getLetter(1) === "0" ? 0 : this.lormPos.get(this.state.text[0]).animFade}}>
                </Animated.View>
                <Animated.View style={{display: 'flex',
                    transform: [{ translateX: this.lormPos.get(this.getLetter(2)).anim2.x }, { translateY: this.lormPos.get(this.getLetter(2)).anim2.y }],
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#1C3956',
                    borderRadius: 20 * imageWidth / 100,
                    width: 10 * imageWidth / 100,
                    height: 10 * imageWidth / 100,
                    position: "absolute",
                    zIndex : 2,
                    opacity: this.getLetter(2) === "0" ? 0 : this.lormPos.get(this.state.text[0]).animFade}}>
                </Animated.View>
                <Animated.View style={{display: 'flex',
                    transform: [{ translateX: this.lormPos.get(this.getLetter(4)).anim3.x }, { translateY: this.lormPos.get(this.getLetter(4)).anim3.y }],
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#1C3956',
                    borderRadius: 20 * imageWidth / 100,
                    width: 10 * imageWidth / 100,
                    height: 10 * imageWidth / 100,
                    position: "absolute",
                    zIndex : 2,
                    opacity: this.getLetter(4) === "0" ? 0 : this.lormPos.get(this.state.text[0]).animFade}}>
                </Animated.View>
                <Animated.View style={{display: 'flex',
                    transform: [{ translateX: this.lormPos.get(this.getLetter(4)).anim4.x }, { translateY: this.lormPos.get(this.getLetter(4)).anim4.y }],
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#1C3956',
                    borderRadius: 20 * imageWidth / 100,
                    width: 10 * imageWidth / 100,
                    height: 10 * imageWidth / 100,
                    position: "absolute",
                    zIndex : 2,
                    opacity: this.getLetter(4) === "0" ? 0 : this.lormPos.get(this.state.text[0]).animFade}}>
                </Animated.View>
                <Animated.View style={{display: 'flex',
                    transform: [{ translateX: this.lormPos.get(this.getLetter(5)).anim5.x }, { translateY: this.lormPos.get(this.getLetter(5)).anim5.y }],
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#1C3956',
                    borderRadius: 20 * imageWidth / 100,
                    width: 10 * imageWidth / 100,
                    height: 10 * imageWidth / 100,
                    position: "absolute",
                    zIndex : 2,
                    opacity: this.getLetter(5) === "0" ? 0 : this.lormPos.get(this.state.text[0]).animFade}}>
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