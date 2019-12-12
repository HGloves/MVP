import React, {Component } from 'react';
import { Dimensions } from 'react-native'
import { StyleSheet, Animated, View } from 'react-native';
const ScreenDim = Dimensions.get("window");

export default class AnnimationComponent extends Component  {
    constructor(props) {
        super(props);
        console.log("animation");
        this.state = {text : this.props.text};
        console.log(this.props);
        this.dotSize = 15 * this.props.imageSize.width / 100;
        this.lormPos = new Map([
            ["0", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: 50, y: 100 }), anim2: new Animated.ValueXY({ x: 50, y: 100 }), anim3: new Animated.ValueXY({ x: 50, y: 100 }), anim4: new Animated.ValueXY({ x: 50, y: 100 }), anim5: new Animated.ValueXY({ x: 50, y: 100 }), animType: this.staticElement}],
            ["a", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: (8.5 * this.props.imageSize.width) / 100, y: (45 * this.props.imageSize.height) / 100 }), animType: this.staticElement }],
            ["b", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: (30 * this.props.imageSize.width) / 100, y: (15 * this.props.imageSize.height) / 100 }), animType: this.moveElement, xStart: (30 * this.props.imageSize.width) / 100, yStart: (15 * this.props.imageSize.height) / 100, xEnd: (35 * this.props.imageSize.width) / 100, yEnd: (45 * this.props.imageSize.height) / 100 }],
            ["c", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: (55 * this.props.imageSize.width) / 100, y: (90 * this.props.imageSize.height) / 100 }), animType: this.staticElement }],
            ["ç", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: 10, y: 10 }), anim2: new Animated.ValueXY({ x: 50, y: 50 }), animType: this.staticElement }],
            ["d", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: (48 * this.props.imageSize.width) / 100, y: (10 * this.props.imageSize.height) / 100 }), animType: this.moveElement, xStart: (48 * this.props.imageSize.width) / 100, yStart: (10 * this.props.imageSize.height) / 100, xEnd: (48 * this.props.imageSize.width) / 100, yEnd: (45 * this.props.imageSize.height) / 100 }],

            ["e", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: 0.35 * this.props.imageSize.width - this.dotSize / 2, y: 0.10 * this.props.imageSize.height - this.dotSize / 2}), animType: this.staticElement}],

            ["fTODO", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: 360, y: 50 }), anim2: new Animated.ValueXY({ x: 50, y: 100 }), animType: this.staticElement }],
            ["i", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: (48 * this.props.imageSize.width) / 100, y: (10 * this.props.imageSize.height) / 100 }), animType: this.staticElement }],
            ["jTODO", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: 360, y: 35 }), anim2: new Animated.ValueXY({ x: 50, y: 100 }), animType: this.staticElement}],
            ["kTODO", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: 360, y: 35 }), anim2: new Animated.ValueXY({ x: 50, y: 100 }), anim3: new Animated.ValueXY({ x: 50, y: 100 }), anim4: new Animated.ValueXY({ x: 50, y: 100 }), animType: this.staticElement }],
            ["m", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: (75 * this.props.imageSize.width) / 100, y: (50 * this.props.imageSize.height) / 100 }), animType: this.staticElement }],
            ["n", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: (35 * this.props.imageSize.width) / 100, y: (45 * this.props.imageSize.height) / 100 }), animType: this.staticElement }],
            ["o", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: (68 * this.props.imageSize.width) / 100, y: (13 * this.props.imageSize.height) / 100 }), animType: this.staticElement }],
            ["r", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: 5, y: 100 }), animType: this.rLetterMove, xFirst: 30, yFirst: 100, xSecond: 70, ySecond: 100, xThird: 100, yThird: 100, xEnd: 140, yEnd: 100 }],//RRR
            ["u", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: (85 * this.props.imageSize.width) / 100, y: (30 * this.props.imageSize.height) / 100 }), animType: this.staticElement }],
            ["v", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: (25 * this.props.imageSize.width) / 100, y: (80 * this.props.imageSize.height) / 100 }), animType: this.staticElement }],
            ["wTODO", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: 230, y: 570 }), anim2: new Animated.ValueXY({ x: 230, y: 570 }), animType: this.staticElement }],
            [" ", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: 50, y: 100 }), anim2: new Animated.ValueXY({ x: 50, y: 100 }), anim3: new Animated.ValueXY({ x: 50, y: 100 }), anim4: new Animated.ValueXY({ x: 50, y: 100 }), anim5: new Animated.ValueXY({ x: 50, y: 100 }), animType: this.staticElement}],
            ["g", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: (68 * this.props.imageSize.width) / 100, y: (13 * this.props.imageSize.height) / 100 }), animType: this.moveElement, xStart: (68 * this.props.imageSize.width) / 100, yStart: (13 * this.props.imageSize.height) / 100, xEnd: (62 * this.props.imageSize.width) / 100, yEnd: (45 * this.props.imageSize.height) / 100  }],
            ["h", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: (85 * this.props.imageSize.width) / 100, y: (30 * this.props.imageSize.height) / 100 }), animType: this.moveElement, xStart: (85 * this.props.imageSize.width) / 100, yStart: (30 * this.props.imageSize.height) / 100, xEnd: (75 * this.props.imageSize.width) / 100, yEnd: (50 * this.props.imageSize.height) / 100 }],
            ["l", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: (48 * this.props.imageSize.width) / 100, y: (10 * this.props.imageSize.height) / 100 }), animType: this.moveElement, xStart: (48 * this.props.imageSize.width) / 100, yStart: (10 * this.props.imageSize.height) / 100, xEnd: (50 * this.props.imageSize.width) / 100, yEnd: (90 * this.props.imageSize.height) / 100 }],
            ["p", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: (25 * this.props.imageSize.width) / 100, y: (45 * this.props.imageSize.height) / 100 }), animType: this.moveElement, xStart: (25 * this.props.imageSize.width) / 100, yStart: (45 * this.props.imageSize.height) / 100, xEnd: (20 * this.props.imageSize.width) / 100, yEnd: (15 * this.props.imageSize.height) / 100 }],
            ["q", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: (72 * this.props.imageSize.width) / 100, y: (92 * this.props.imageSize.height) / 100 }), animType: this.moveElement, xStart: (72 * this.props.imageSize.width) / 100, yStart: (92 * this.props.imageSize.height) / 100, xEnd: (66 * this.props.imageSize.height) / 100, yEnd: (60 * this.props.imageSize.height) / 100 }],
            ["rTODO", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: 555, y: 590 }), animType: this.moveElement, xStart: 555, yStart: 590, xEnd: 555, yEnd: 350 }],
            ["s", {animFade: new Animated.Value(0), anim1: new Animated.Value(0), animType: this.circleElement, xStart:(50 * this.props.imageSize.width) / 100, yStart: (70 * this.props.imageSize.height) / 100, xEnd: (50 * this.props.imageSize.width) / 100, yEnd: (70 * this.props.imageSize.height) / 100}],
            ["t", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: (6 * this.props.imageSize.width) / 100, y: (45 * this.props.imageSize.height) / 100 }), animType: this.moveElement, xStart: (6 * this.props.imageSize.width) / 100, yStart: (45 * this.props.imageSize.height) / 100, xEnd: (17 * this.props.imageSize.width) / 100, yEnd: (60 * this.props.imageSize.height) / 100 }],
            ["x", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: (38 * this.props.imageSize.width) / 100, y: (90 * this.props.imageSize.height) / 100 }), animType: this.moveElement, xStart: (38 * this.props.imageSize.width) / 100, yStart: (90 * this.props.imageSize.height) / 100, xEnd: (67 * this.props.imageSize.width) / 100, yEnd: (90 * this.props.imageSize.height) / 100 }],
            ["y", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: (35 * this.props.imageSize.width) / 100, y: (45 * this.props.imageSize.height) / 100 }), animType: this.moveElement, xStart: (35 * this.props.imageSize.width) / 100, yStart: (45 * this.props.imageSize.height) / 100, xEnd: (75 * this.props.imageSize.width) / 100, yEnd: (50 * this.props.imageSize.height) / 100 }],
            ["z", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: (50 * this.props.imageSize.width) / 100, y: (80 * this.props.imageSize.height) / 100 }), animType: this.moveElement, xStart: (50 * this.props.imageSize.width) / 100, yStart: (80 * this.props.imageSize.height) / 100, xEnd: (70 * this.props.imageSize.width) / 100, yEnd: (65 * this.props.imageSize.height) / 100 }]
        ]);
        let snapshot = 200, radius = (17 * this.props.imageSize.width) / 100;
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

    componentDidMount() {
        this.whichLetters();
        setTimeout(() => (this.animComponent.measure((fx, fy, width, height, px, py) => {
            console.log("PUTE width = " + width)
            console.log("PUTE width = " + height)
            console.log("PUTE fx = " + fx)
            console.log("PUTE fy = " + fy)
            console.log("PUTE px = " + px)
            console.log("PUTE py = " + py)
        })), 0);
    }

    componentDidUpdate() {
        setTimeout(() => (this.animComponent.measure((fx, fy, width, height, px, py) => {
            console.log("PUTE width = " + width)
            console.log("PUTE width = " + height)
            console.log("PUTE fx = " + fx)
            console.log("PUTE fy = " + fy)
            console.log("PUTE px = " + px)
            console.log("PUTE py = " + py)
        })), 0);
    }

    fadeElement = (obj, fade) => {
        return (Animated.timing(obj.animFade, {
            toValue: fade,
            duration: 400,
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
        const transformS = [{ translateY: this.try - this.dotSize / 2}, {translateX: this.trx - this.dotSize / 2}];
        return (
            <View style={[this.props.style, {position: "absolute"},
            {top: this.props.imagePos.y}, {left: this.props.imagePos.x}]}
            ref={ref => { this.animComponent = ref; }}
            >
                <Animated.View
                style={{display: 'flex',
                  transform: (this.state.text[0] !== "s" ? [{translateX: this.lormPos.get(this.getLetter(1)).anim1.x}, {translateY: this.lormPos.get(this.getLetter(1)).anim1.y}] : transformS),
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#1C3956',
                    borderRadius: 20 * this.props.imageSize.width / 100,
                    width: this.dotSize,
                    height: this.dotSize,
                    position: "absolute",
                    zIndex : 20,
                    opacity: this.getLetter(1) === "0" ? 0 : this.lormPos.get(this.state.text[0]).animFade}}>
                </Animated.View>
                <Animated.View style={{display: 'flex',
                    transform: [{ translateX: this.lormPos.get(this.getLetter(2)).anim2.x }, { translateY: this.lormPos.get(this.getLetter(2)).anim2.y }],
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#1C3956',
                    borderRadius: 20 * this.props.imageSize.width / 100,
                    width: this.dotSize,
                    height: this.dotSize,
                    position: "absolute",
                    zIndex : 20,
                    opacity: this.getLetter(2) === "0" ? 0 : this.lormPos.get(this.state.text[0]).animFade}}>
                </Animated.View>
                <Animated.View style={{display: 'flex',
                    transform: [{ translateX: this.lormPos.get(this.getLetter(4)).anim3.x }, { translateY: this.lormPos.get(this.getLetter(4)).anim3.y }],
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#1C3956',
                    borderRadius: 20 * this.props.imageSize.width / 100,
                    width: this.dotSize,
                    height: this.dotSize,
                    position: "absolute",
                    zIndex : 20,
                    opacity: this.getLetter(4) === "0" ? 0 : this.lormPos.get(this.state.text[0]).animFade}}>
                </Animated.View>
                <Animated.View style={{display: 'flex',
                    transform: [{ translateX: this.lormPos.get(this.getLetter(4)).anim4.x }, { translateY: this.lormPos.get(this.getLetter(4)).anim4.y }],
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#1C3956',
                    borderRadius: 20 * this.props.imageSize.width / 100,
                    width: this.dotSize,
                    height: this.dotSize,
                    position: "absolute",
                    zIndex : 20,
                    opacity: this.getLetter(4) === "0" ? 0 : this.lormPos.get(this.state.text[0]).animFade}}>
                </Animated.View>
                <Animated.View style={{display: 'flex',
                    transform: [{ translateX: this.lormPos.get(this.getLetter(5)).anim5.x }, { translateY: this.lormPos.get(this.getLetter(5)).anim5.y }],
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#1C3956',
                    borderRadius: 20 * this.props.imageSize.width / 100,
                    width: this.dotSize,
                    height: this.dotSize,
                    position: "absolute",
                    zIndex : 20,
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