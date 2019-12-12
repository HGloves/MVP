import React, {Component } from 'react';
import { Dimensions } from 'react-native'
import { StyleSheet, Animated, View } from 'react-native';
const ScreenDim = Dimensions.get("window");

export default class AnnimationComponent extends Component  {
    constructor(props) {
        super(props);
        console.log("animation");
        this.dotSize = 8 * this.props.imageSize.width / 100;
        this.state = {text : this.props.text, lormPos : new Map([
            ["0", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY(0), anim2: new Animated.ValueXY(0), anim3: new Animated.ValueXY(0), anim4: new Animated.ValueXY(0), anim5: new Animated.ValueXY(0), animType: this.staticElement}],
            ["s", {animFade: new Animated.Value(0), anim1: new Animated.Value(0), animType: this.circleElement, xStart: (.50 * this.props.imageSize.width) - (this.dotSize / 2), yStart: (.70 * this.props.imageSize.height) -( this.dotSize / 2), xEnd: (.50 * this.props.imageSize.width) - (this.dotSize / 2), yEnd: (.70 * this.props.imageSize.height) - (this.dotSize / 2) }]
        ])};
        let snapshot = 200, radius = .17 * this.props.imageSize.width - (this.dotSize / 2);
        let inputRangeX = [], outputRangeX = [];
        for (let i=0; i<=snapshot; ++i) {
            let value = i/snapshot;
            let move = Math.sin(value * Math.PI * 2) * radius + this.state.lormPos.get("s").xStart;
            inputRangeX.push(value);
            outputRangeX.push(move);
        }
        this.trx = this.state.lormPos.get("s").anim1.interpolate({ inputRange: inputRangeX, outputRange: outputRangeX });

        let inputRangeY = [], outputRangeY = [];
        for (let i=0; i<=snapshot; ++i) {
            let value = i/snapshot;
            let move = -Math.cos(value * Math.PI * 2) * radius + this.state.lormPos.get("s").yStart;
            inputRangeY.push(value);
            outputRangeY.push(move);
        }
        this.try = this.state.lormPos.get("s").anim1.interpolate({ inputRange: inputRangeY, outputRange: outputRangeY });
    }

    getCoordonateX(coordonate) {
        return coordonate * this.props.imageSize.width - (this.dotSize / 2);
    }

    getCoordonateY(coordonate) {
        return coordonate * this.props.imageSize.height - (this.dotSize / 2);
    }

    componentDidMount() {
        this.setState({lormPos : new Map([
            ["0", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY(0), anim2: new Animated.ValueXY(0), anim3: new Animated.ValueXY(0), anim4: new Animated.ValueXY(0), anim5: new Animated.ValueXY(0), animType: this.staticElement}],
            ["a", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: this.getCoordonateX(.11), y: this.getCoordonateY(.44) }), animType: this.staticElement }],
            ["b", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({x: this.getCoordonateX(0.36), y: this.getCoordonateY(0.13) }), animType: this.moveElement, xStart: 0.36, yStart: 0.13, xEnd: 0.38, yEnd: 0.40 }],
            ["c", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: this.getCoordonateX(.55), y: this.getCoordonateY(.88) }), animType: this.staticElement }],
            ["ç", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: this.getCoordonateX(.50), y: this.getCoordonateY(.89) }), anim2: new Animated.ValueXY({ x: this.getCoordonateX(.60), y: this.getCoordonateY(.89) }), animType: this.staticElement }],
            ["d", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: this.getCoordonateX(.54), y: this.getCoordonateY(.10) }), animType: this.moveElement, xStart: .54, yStart: .10, xEnd: .53, yEnd: .35}],
            ["e", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: this.getCoordonateX(0.36), y: this.getCoordonateY(0.11) }), animType: this.staticElement}],
            ["f", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: this.getCoordonateX(0.32), y: this.getCoordonateY(0.23) }), anim2: new Animated.ValueXY({ x: this.getCoordonateX(0.58), y: this.getCoordonateY(0.21) }), animType: this.staticElement }],
            ["i", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: this.getCoordonateX(.54), y: this.getCoordonateY(.08) }), animType: this.staticElement }],
            ["j", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: this.getCoordonateX(.49), y: this.getCoordonateY(.10) }), anim2: new Animated.ValueXY({ x: this.getCoordonateX(.56), y: this.getCoordonateY(.10) }), animType: this.staticElement}],
            ["k", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: this.getCoordonateX(.45), y: this.getCoordonateY(.55) }), anim2: new Animated.ValueXY({ x: this.getCoordonateX(.45), y: this.getCoordonateY(.65) }), anim3: new Animated.ValueXY({ x: this.getCoordonateX(.65), y: this.getCoordonateY(.55) }), anim4: new Animated.ValueXY({ x: this.getCoordonateX(.65), y: this.getCoordonateY(.65) }), animType: this.staticElement }],
            ["m", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: this.getCoordonateX(.75), y: this.getCoordonateY(.50) }), animType: this.staticElement }],
            ["n", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: this.getCoordonateX(.40), y: this.getCoordonateY(.50) }), animType: this.staticElement }],
            ["o", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: this.getCoordonateX(.72), y: this.getCoordonateY(.11) }), animType: this.staticElement }],
            ["r", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: this.getCoordonateX(.70), y: this.getCoordonateY(.70) }), animType: this.rLetterMove, xFirst: .70, yFirst: .70, xSecond: .60, ySecond: .70, xThird: .50, yThird: .70, xEnd: .40, yEnd: .70 }],
            ["u", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: this.getCoordonateX(.87), y: this.getCoordonateY(.29) }), animType: this.staticElement }],
            ["v", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: this.getCoordonateX(.38), y: this.getCoordonateY(.70) }), animType: this.staticElement }],
            ["w", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: this.getCoordonateX(.38), y: this.getCoordonateY(.73) }), anim2: new Animated.ValueXY({ x: this.getCoordonateX(.47), y: this.getCoordonateY(.73) }), animType: this.staticElement }],
            [" ", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: this.getCoordonateX(.11), y: this.getCoordonateY(.44) }), anim2: new Animated.ValueXY({ x: this.getCoordonateX(0.36), y: this.getCoordonateY(0.13) }), anim3: new Animated.ValueXY({ x: this.getCoordonateX(.54), y: this.getCoordonateY(.10) }), anim4: new Animated.ValueXY({ x: this.getCoordonateX(.72), y: this.getCoordonateY(.13) }), anim5: new Animated.ValueXY({ x: this.getCoordonateX(.87), y: this.getCoordonateY(.29) }), animType: this.staticElement}],
            ["g", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: this.getCoordonateX(.72), y: this.getCoordonateY(.13) }), animType: this.moveElement, xStart: .72, yStart: .13, xEnd: .69, yEnd: .32 }],
            ["h", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: this.getCoordonateX(.87), y: this.getCoordonateY(.30) }), animType: this.moveElement, xStart: .3, xEnd: .81, yEnd: .42 }],
            ["l", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: this.getCoordonateX(.55), y: this.getCoordonateY(.10) }), animType: this.moveElement, xStart: .55, yStart: .10, xEnd: .60, yEnd: .75 }],
            ["p", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: this.getCoordonateX(.32), y: this.getCoordonateY(.45) }), animType: this.moveElement, xStart: .32, yStart: .45, xEnd: .28, yEnd: .15 }],
            ["q", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: this.getCoordonateX(.80), y: this.getCoordonateY(.70) }), animType: this.moveElement, xStart: .80, yStart: .70, xEnd: .80, yEnd: .53 }],
            ["s", { animFade: this.state.lormPos.get("s").animFade, anim1: this.state.lormPos.get("s").anim1, animType: this.circleElement, xStart: (.50 * this.props.imageSize.width) - (this.dotSize / 2), yStart: (.70 * this.props.imageSize.height )- (this.dotSize / 2), xEnd: (.50 * this.props.imageSize.width) - (this.dotSize / 2), yEnd: (.70 * this.props.imageSize.height) - (this.dotSize / 2) }],
            ["t", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: this.getCoordonateX(.14), y: this.getCoordonateY(.49) }), animType: this.moveElement, xStart: .14, yStart: .49, xEnd: .22, yEnd: .58 }],
            ["x", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: this.getCoordonateX(.45), y: this.getCoordonateY(.88) }), animType: this.moveElement, xStart: .45, yStart: .88, xEnd: .67, yEnd: .88 }],
            ["y", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: this.getCoordonateX(.40), y: this.getCoordonateY(.42) }), animType: this.moveElement, xStart: .40, yStart: .42, xEnd: .75, yEnd: .50 }],
            ["z", { animFade: new Animated.Value(0), anim1: new Animated.ValueXY({ x: this.getCoordonateX(.54), y: this.getCoordonateY(.75) }), animType: this.moveElement, xStart: .54, yStart: .75, xEnd: .70, yEnd: .58 }]
        ]) }, () => {
            this.whichLetters();
        });
    }

    componentDidUpdate() {
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
                    toValue: {x: this.getCoordonateX(obj.xEnd), y: this.getCoordonateY(obj.yEnd)},
                    duration: 100
                }),
                this.fadeElement(obj, 0),
                Animated.timing(obj.anim1, {
                    toValue: {x: this.getCoordonateX(obj.xStart), y: this.getCoordonateY(obj.yStart)},
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
        obj.anim1.setValue(0)
        console.log({...obj});
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
                toValue: {x: this.getCoordonateX(obj.xSecond), y: this.getCoordonateY(obj.ySecond)},
                duration: 100
            }),
            this.fadeElement(obj, 1),
            this.fadeElement(obj, 0),
            Animated.timing(obj.anim1, {
                toValue: {x: this.getCoordonateX(obj.xThird), y: this.getCoordonateY(obj.yThird)},
                duration: 100
            }),
            this.fadeElement(obj, 1),
            this.fadeElement(obj, 0),
            Animated.timing(obj.anim1, {
                toValue: {x: this.getCoordonateX(obj.xEnd), y: this.getCoordonateY(obj.yEnd)},
                duration: 100
            }),
            this.fadeElement(obj, 1),
            this.fadeElement(obj, 0),
            Animated.timing(obj.anim1, {
                toValue: {x: this.getCoordonateX(obj.xFirst), y: this.getCoordonateY(obj.yFirst)},
                duration: 100
            })
        ]).start(callback);
    };

    whichLetters = () => {
        if (this.state.text[0] === undefined || this.state.lormPos.has(this.state.text[0]) == false) {
            this.setState({text : this.state.text.substr(1)}, () => {
                if (this.state.text === "") {
                    this.props.stopAnimation();
                    return;
                }
                this.whichLetters();
            });
            return;
        }
        obj = this.state.lormPos.get(this.state.text[0]);
        obj.animType(obj , () => {
            this.setState({text : this.state.text.substr(1)}, () => {
                if (this.state.text === "") {
                    this.props.stopAnimation();
                    return;
                }
                this.whichLetters();
            });
        });
    };

    getLetter = (nbr) => {
        if (this.state.text[0] === undefined || this.state.lormPos.has(this.state.text[0]) == false)
            return "0";
        if (nbr == 1)
            return this.state.text[0];
        if (nbr == 2 && (this.state.text[0] == "k" || this.state.text[0] == "ç" || this.state.text[0] == "j" || this.state.text[0] == "f" || this.state.text[0] == "w" || this.state.text[0] == " "))
            return this.state.text[0];
        if (nbr == 4 && (this.state.text[0] == "k" || this.state.text[0] == " "))
            return this.state.text[0];
        if (nbr == 5 && this.state.text[0] == " ")
            return this.state.text[0];
        return "0";
    };

    render() {
        const transformS = [{ translateY: this.try}, {translateX: this.trx}];
        return (
            <View style={[this.props.style, {position: "absolute"}]}>
                <Animated.View
                style={{display: 'flex',
                  transform: (this.state.text[0] !== "s" ?[{ translateX: this.state.lormPos.get(this.getLetter(1)).anim1.x }, { translateY: this.state.lormPos.get(this.getLetter(1)).anim1.y }] : transformS),
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#1C3956',
                    borderRadius: 20 * this.props.imageSize.width / 100,
                    width: this.dotSize,
                    height: this.dotSize,
                    position: "absolute",
                    zIndex : 5,
                    opacity: this.getLetter(1) === "0" ? 0 : this.state.lormPos.get(this.state.text[0]).animFade}}>
                </Animated.View>
                <Animated.View style={{display: 'flex',
                    transform: [{ translateX: this.state.lormPos.get(this.getLetter(2)).anim2.x }, { translateY: this.state.lormPos.get(this.getLetter(2)).anim2.y }],
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#1C3956',
                    borderRadius: 20 * this.props.imageSize.width / 100,
                    width: this.dotSize,
                    height: this.dotSize,
                    position: "absolute",
                    zIndex : 5,
                    opacity: this.getLetter(2) === "0" ? 0 : this.state.lormPos.get(this.state.text[0]).animFade}}>
                </Animated.View>
                <Animated.View style={{display: 'flex',
                    transform: [{ translateX: this.state.lormPos.get(this.getLetter(4)).anim3.x }, { translateY: this.state.lormPos.get(this.getLetter(4)).anim3.y }],
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#1C3956',
                    borderRadius: 20 * this.props.imageSize.width / 100,
                    width: this.dotSize,
                    height: this.dotSize,
                    position: "absolute",
                    zIndex : 5,
                    opacity: this.getLetter(4) === "0" ? 0 : this.state.lormPos.get(this.state.text[0]).animFade}}>
                </Animated.View>
                <Animated.View style={{display: 'flex',
                    transform: [{ translateX: this.state.lormPos.get(this.getLetter(4)).anim4.x }, { translateY: this.state.lormPos.get(this.getLetter(4)).anim4.y }],
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#1C3956',
                    borderRadius: 20 * this.props.imageSize.width / 100,
                    width: this.dotSize,
                    height: this.dotSize,
                    position: "absolute",
                    zIndex : 5,
                    opacity: this.getLetter(4) === "0" ? 0 : this.state.lormPos.get(this.state.text[0]).animFade}}>
                </Animated.View>
                <Animated.View style={{display: 'flex',
                    transform: [{ translateX: this.state.lormPos.get(this.getLetter(5)).anim5.x }, { translateY: this.state.lormPos.get(this.getLetter(5)).anim5.y }],
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#1C3956',
                    borderRadius: 20 * this.props.imageSize.width / 100,
                    width: this.dotSize,
                    height: this.dotSize,
                    position: "absolute",
                    zIndex : 5,
                    opacity: this.getLetter(5) === "0" ? 0 : this.state.lormPos.get(this.state.text[0]).animFade}}>
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
        justifyContent: 'center',
        zIndex: 0
    },
    tennisBall: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'greenyellow',
        borderRadius: 100,
        width: 100,
        height: 100,
        zIndex: 5,
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