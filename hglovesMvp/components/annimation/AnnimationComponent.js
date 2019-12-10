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
            ["0", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: 50, y: 100 }) }],
            ["a", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: (8.5 * imageWidth) / 100, y: (45 * imageHeight) / 100 }), animType: this.staticElement, xEnd: (8.5 * imageWidth) / 100, yEnd: (45 * imageHeight) / 100 }],
            ["b", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: (30 * imageWidth) / 100, y: (15 * imageHeight) / 100 }), animType: this.moveElement, xStart: (30 * imageWidth) / 100, yStart: (15 * imageHeight) / 100, xEnd: (35 * imageWidth) / 100, yEnd: (45 * imageHeight) / 100 }],
            ["c", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: (55 * imageWidth) / 100, y: (90 * imageHeight) / 100 }), animType: this.staticElement, xEnd: (55 * imageWidth) / 100, yEnd: (90 * imageHeight) / 100 }],
            ["çTODO", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: 375, y: 735 }), animType: this.staticElement, xEnd: 375, yEnd: 735 }],
            ["d", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: (48 * imageWidth) / 100, y: (10 * imageHeight) / 100 }), animType: this.moveElement, xStart: (48 * imageWidth) / 100, yStart: (10 * imageHeight) / 100, xEnd: (48 * imageWidth) / 100, yEnd: (45 * imageHeight) / 100 }],
            ["e", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: (30 * imageWidth) / 100, y: (15 * imageHeight) / 100 }), animType: this.staticElement, xEnd: (30 * imageWidth) / 100, yEnd: (15 * imageHeight) / 100 }],
            ["fTODO", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: 360, y: 50 }), animType: this.moveElement, xStart: 360, yStart: 50, xEnd: 360, yEnd: 250 }],
            ["g", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: (68 * imageWidth) / 100, y: (13 * imageHeight) / 100 }), animType: this.moveElement, xStart: (68 * imageWidth) / 100, yStart: (13 * imageHeight) / 100, xEnd: (62 * imageWidth) / 100, yEnd: (45 * imageHeight) / 100  }],
            ["h", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: (85 * imageWidth) / 100, y: (30 * imageHeight) / 100 }), animType: this.moveElement, xStart: (85 * imageWidth) / 100, yStart: (30 * imageHeight) / 100, xEnd: (75 * imageWidth) / 100, yEnd: (50 * imageHeight) / 100 }],
            ["i", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: (48 * imageWidth) / 100, y: (10 * imageHeight) / 100 }), animType: this.staticElement, xEnd: (48 * imageWidth) / 100, yEnd: (10 * imageHeight) / 100 }],
            ["jTODO", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: 360, y: 35 }), animType: this.staticElement, xEnd: 360, yEnd: 35 }],
            ["kTODO", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: 360, y: 35 }), animType: this.staticElement, xEnd: 360, yEnd: 35 }],
            ["l", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: (48 * imageWidth) / 100, y: (10 * imageHeight) / 100 }), animType: this.moveElement, xStart: (48 * imageWidth) / 100, yStart: (10 * imageHeight) / 100, xEnd: (50 * imageWidth) / 100, yEnd: (90 * imageHeight) / 100 }],
            ["m", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: (75 * imageWidth) / 100, y: (50 * imageHeight) / 100 }), animType: this.staticElement, xEnd: (75 * imageWidth) / 100, yEnd: (50 * imageHeight) / 100 }],
            ["n", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: (35 * imageWidth) / 100, y: (45 * imageHeight) / 100 }), animType: this.staticElement, xEnd: (35 * imageWidth) / 100, yEnd: (45 * imageHeight) / 100 }],
            ["o", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: (68 * imageWidth) / 100, y: (13 * imageHeight) / 100 }), animType: this.staticElement, xEnd: (68 * imageWidth) / 100, yEnd: (13 * imageHeight) / 100 }],
            ["p", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: (25 * imageWidth) / 100, y: (45 * imageHeight) / 100 }), animType: this.moveElement, xStart: (25 * imageWidth) / 100, yStart: (45 * imageHeight) / 100, xEnd: (20 * imageWidth) / 100, yEnd: (15 * imageHeight) / 100 }],
            ["q", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: (72 * imageWidth) / 100, y: (92 * imageHeight) / 100 }), animType: this.moveElement, xStart: (72 * imageWidth) / 100, yStart: (92 * imageHeight) / 100, xEnd: (66 * imageHeight) / 100, yEnd: (60 * imageHeight) / 100 }],
            ["rTODO", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: 555, y: 590 }), animType: this.moveElement, xStart: 555, yStart: 590, xEnd: 555, yEnd: 350 }],
            ["s", {animFade: new Animated.Value(0), moveAnim: new Animated.Value(0), animType: this.circleElement, xStart:(50 * imageWidth) / 100, yStart: (70 * imageHeight) / 100, xEnd: (50 * imageWidth) / 100, yEnd: (70 * imageHeight) / 100}],
            ["t", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: (17 * imageWidth) / 100, y: (60 * imageHeight) / 100 }), animType: this.moveElement, xStart: (17 * imageWidth) / 100, yStart: (60 * imageHeight) / 100, xEnd: (6 * imageWidth) / 100, yEnd: (45 * imageHeight) / 100 }],
            ["u", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: (85 * imageWidth) / 100, y: (30 * imageHeight) / 100 }), animType: this.staticElement, xEnd: (85 * imageWidth) / 100, yEnd: (30 * imageHeight) / 100 }],
            ["v", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: (25 * imageWidth) / 100, y: (80 * imageHeight) / 100 }), animType: this.staticElement, xEnd: (25 * imageWidth) / 100, yEnd: (80 * imageHeight) / 100 }],
            ["wTODO", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: 230, y: 570 }), animType: this.staticElement, xEnd: 230, yEnd: 570 }],
            ["x", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: (38 * imageWidth) / 100, y: (90 * imageHeight) / 100 }), animType: this.moveElement, xStart: (38 * imageWidth) / 100, yStart: (90 * imageHeight) / 100, xEnd: (67 * imageWidth) / 100, yEnd: (90 * imageHeight) / 100 }],
            ["y", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: (35 * imageWidth) / 100, y: (45 * imageHeight) / 100 }), animType: this.moveElement, xStart: (35 * imageWidth) / 100, yStart: (45 * imageHeight) / 100, xEnd: (75 * imageWidth) / 100, yEnd: (50 * imageHeight) / 100 }],
            ["z", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: (50 * imageWidth) / 100, y: (80 * imageHeight) / 100 }), animType: this.moveElement, xStart: (50 * imageWidth) / 100, yStart: (80 * imageHeight) / 100, xEnd: (70 * imageWidth) / 100, yEnd: (65 * imageHeight) / 100 }]
        ]);
        let snapshot = 200, radius = (17 * imageWidth) / 100;
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
                    duration: 400
                }),
                Animated.timing(obj.moveAnim, {
                    toValue: {x: obj.xEnd, y: obj.yEnd},
                    duration: 100
                }),
                Animated.timing(obj.animFade, {
                    toValue: 0,
                    duration: 400
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
                    duration: 400
                }),
                Animated.timing(obj.animFade, {
                    toValue: 0,
                    duration: 400
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
            <Animated.View style={{display: 'flex',
                        transform: (this.state.text[0] !== "s" ?  [{translateX: this.lormPos.get(this.state.text[0] === undefined ? "0" : this.state.text[0]).moveAnim.x}, {translateY: this.lormPos.get(this.state.text[0] === undefined ? "0" : this.state.text[0]).moveAnim.y}] : transformS),
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'greenyellow',
                        borderRadius: 20 * imageWidth / 100,
                        width: 10 * imageWidth / 100,
                        height: 10 * imageWidth / 100,
                        zIndex : 2,
                        opacity: this.lormPos.get(this.state.text[0] === undefined ? "0" : this.state.text[0]).animFade}}>
            </Animated.View>
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