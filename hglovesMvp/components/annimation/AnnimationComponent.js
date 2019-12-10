import React, {Component } from 'react';
import { Dimensions } from 'react-native'
import { StyleSheet, Animated} from 'react-native';

const ScreenDim = Dimensions.get("window");

export default class AnnimationComponent extends Component  {
    constructor(props) {
        super(props);
        console.log("animation");
        this.state = {text : this.props.text};
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
            ["s", {animFade: new Animated.Value(0), moveAnim: new Animated.Value(0), animType: this.circleElement, xStart: 150, yStart: 500, xEnd: 200, yEnd: 200}]
            ["t", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: 80, y: 340 }), animType: this.moveElement, xStart: 60, yStart: 320, xEnd: 170, yEnd: 490 }],
            ["u", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: 600, y: 170 }), animType: this.staticElement, xEnd: 600, yEnd: 170 }],
            ["v", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: 230, y: 570 }), animType: this.staticElement, xEnd: 230, yEnd: 570 }],
            ["wTODO", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: 230, y: 570 }), animType: this.staticElement, xEnd: 230, yEnd: 570 }],
            ["x", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: 250, y: 735 }), animType: this.moveElement, xStart: 250, yStart: 735, xEnd: 500, yEnd: 735 }],
            ["y", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: 280, y: 380 }), animType: this.moveElement, xStart: 280, yStart: 380, xEnd: 490, yEnd: 390 }],
            ["z", { animFade: new Animated.Value(0), moveAnim: new Animated.ValueXY({ x: 380, y: 610 }), animType: this.moveElement, xStart: 380, yStart: 610, xEnd: 490, yEnd: 430 }]
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
                        borderRadius: 200,
                        width: 100,
                        height: 100,
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