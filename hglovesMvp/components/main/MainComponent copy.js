import React from 'react';
import { Dimensions } from 'react-native'
import { StyleSheet, PanResponder, Text, View, Image, Button} from 'react-native';
import update from 'immutability-helper';

const ScreenDim = Dimensions.get("window");

class MainComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            imageHandX: -1,
            imageHandY: -1,
            imageHandWidth: -1,
            imageHandHeight: -1,
            lastUsedId: 0,
            lastTouchOnTouchable: true,
            direction: 'None',
            input: 'Your input: ',
            //Id de la zone, coordonnée de la zone, touchId (null si pas touché)
            touchableDetect: [
                {id: 'A', px0: 5, px1: 20, py0: 40, py1: 45, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},

                {id: 'T0', px0: 5, px1: 20, py0: 45, py1: 50, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'T1', px0: 10, px1: 25, py0: 50, py1: 55, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},

                {id: 'E', px0: 30, px1: 40, py0: 5, py1: 10, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'O', px0: 65, px1: 80, py0: 5, py1: 15, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'U', px0: 80, px1: 95, py0: 25, py1: 30, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'M', px0: 70, px1: 85, py0: 45, py1: 50, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'C', px0: 45, px1: 65, py0: 80, py1: 95, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'N', px0: 30, px1: 45, py0: 40, py1: 45, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'K', px0: 40, px1: 70, py0: 50, py1: 75, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'I/J', px0: 45, px1: 60, py0: 5, py1: 10, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'D0', px0: 45, px1: 60, py0: 15, py1: 20, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'D1', px0: 45, px1: 60, py0: 20, py1: 25, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'D2', px0: 45, px1: 60, py0: 25, py1: 30, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'D3', px0: 45, px1: 60, py0: 30, py1: 35, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},

                {id: 'L0', px0: 45, px1: 60, py0: 35, py1: 50, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'L1', px0: 45, px1: 60, py0: 50, py1: 65, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'L2', px0: 45, px1: 60, py0: 65, py1: 80, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},

                {id: 'Z0', px0: 40, px1: 50, py0: 70, py1: 80, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'Z1', px0: 50, px1: 60, py0: 65, py1: 75, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'Z2', px0: 60, px1: 70, py0: 60, py1: 70, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},

                {id: 'G0', px0: 65, px1: 75, py0: 15, py1: 20, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'G1', px0: 65, px1: 75, py0: 20, py1: 25, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'G2', px0: 65, px1: 75, py0: 25, py1: 30, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'G3', px0: 65, px1: 75, py0: 30, py1: 35, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},

                {id: 'H0', px0: 80, px1: 90, py0: 30, py1: 35, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'H1', px0: 80, px1: 90, py0: 35, py1: 40, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'H2', px0: 75, px1: 85, py0: 40, py1: 45, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},

                {id: 'P0', px0: 25, px1: 35, py0: 15, py1: 20, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'P1', px0: 25, px1: 35, py0: 20, py1: 25, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'P2', px0: 25, px1: 35, py0: 25, py1: 30, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'P3', px0: 25, px1: 35, py0: 30, py1: 35, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'P4', px0: 25, px1: 35, py0: 35, py1: 40, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'P5', px0: 25, px1: 35, py0: 40, py1: 45, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},

                {id: 'V/W', px0: 25, px1: 40, py0: 70, py1: 85, touchId: -1, touched: false,        maxSimultaneousTouchOnZone: -1},

                {id: 'B0', px0: 30, px1: 45, py0: 25, py1: 30, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'B1', px0: 30, px1: 45, py0: 30, py1: 35, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'B2', px0: 30, px1: 45, py0: 35, py1: 40, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},

                {id: 'F0', px0: 25, px1: 30, py0: 10, py1: 25, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'F1', px0: 55, px1: 60, py0: 10, py1: 25, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},

                {id: 'X0', px0: 35, px1: 50, py0: 85, py1: 95, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'X1', px0: 50, px1: 65, py0: 85, py1: 95, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'X2', px0: 35, px1: 50, py0: 85, py1: 95, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},

                {id: 'S0', px0: 45, px1: 60, py0: 45, py1: 55, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'S1', px0: 60, px1: 70, py0: 50, py1: 70, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'S2', px0: 60, px1: 70, py0: 65, py1: 75, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'S3', px0: 35, px1: 45, py0: 50, py1: 70, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},

                {id: 'Q0', px0: 70, px1: 85, py0: 50, py1: 60, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'Q1', px0: 70, px1: 85, py0: 60, py1: 70, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'Q2', px0: 70, px1: 85, py0: 70, py1: 80, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},

                {id: 'Y0', px0: 30, px1: 45, py0: 40, py1: 50, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'Y1', px0: 60, px1: 75, py0: 40, py1: 50, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
            ],
            letterDetect: [
                {letter: 'S', zones: ['S0', 'S1', 'S2', 'S3'], type: 'slideTouch'},
                {letter: 'A', zones: ['A'], type: 'simultaneousTouch', nbOfTouch: 1},
                {letter: 'E', zones: ['E'], type: 'simultaneousTouch', nbOfTouch: 1},
                {letter: 'O', zones: ['O'], type: 'simultaneousTouch', nbOfTouch: 1},
                {letter: 'U', zones: ['U'], type: 'simultaneousTouch', nbOfTouch: 1},
                {letter: 'M', zones: ['M'], type: 'simultaneousTouch', nbOfTouch: 1},
                {letter: 'N', zones: ['N'], type: 'simultaneousTouch', nbOfTouch: 1},
                {letter: 'C', zones: ['C'], type: 'simultaneousTouch', nbOfTouch: 1},
                {letter: 'Ç', zones: ['C'], type: 'simultaneousTouch', nbOfTouch: 2},
                {letter: 'K', zones: ['K'], type: 'simultaneousTouch', nbOfTouch: 4},
                {letter: 'I', zones: ['I/J'], type: 'simultaneousTouch', nbOfTouch: 1},
                {letter: 'J', zones: ['I/J'], type: 'simultaneousTouch', nbOfTouch: 2},
                {letter: 'V', zones: ['V/W'], type: 'simultaneousTouch', nbOfTouch: 1},
                {letter: 'W', zones: ['V/W'], type: 'simultaneousTouch', nbOfTouch: 2},
                {letter: 'B', zones: ['B0', 'B1', 'B2'], type: 'slideTouch', direction: 'Top to Bottom'},
                {letter: 'X', zones: ['X0', 'X1', 'X2'], type: 'slideTouch', direction: 'Left to Right'},
                {letter: 'L', zones: ['D0', 'D1', 'D2', 'D3', 'L0', 'L1', 'L2'], type: 'slideTouch', direction: 'Top to Bottom'},
                {letter: 'D', zones: ['D0', 'D1', 'D2', 'D3'], type: 'slideTouch', direction: 'Top to Bottom'},
                {letter: 'G', zones: ['G0', 'G1', 'G2', 'G3'], type: 'slideTouch', direction: 'Top to Bottom'},
                {letter: 'H', zones: ['H0', 'H1', 'H2'], type: 'slideTouch', direction: 'Top to Bottom'},
                {letter: 'F', zones: ['F0', 'F1'], type: 'alternateTouch'},
                {letter: 'T', zones: ['T0', 'T1'], type: 'slideTouch', direction: 'Top to Bottom', alternativeDirection: 'Left to Right'},
                {letter: 'P', zones: ['P0', 'P1', 'P2', 'P3', 'P4', 'P5'], type: 'slideTouch', direction: 'Bottom to Top'},
                {letter: 'Z', zones: ['Z0', 'Z1', 'Z2'], type: 'slideTouch', direction: 'Left to Right', alternativeDirection: 'Bottom to Top'},
                {letter: 'Q', zones: ['Q0', 'Q1', 'Q2'], type: 'slideTouch', direction: 'Bottom to Top'},
                {letter: 'Y', zones: ['Y0', 'L0', 'Y1'], type: 'slideTouch', direction: 'Left to Right'},               
            ],
            //Chaud sa mère: R, F
            debugLastX0: 0,
            debugLastX1: 10,
            debugLastY0: 0,
            debugLastY1: 10,
        }
        
        this._panResponder = PanResponder.create(
            {
                onStartShouldSetPanResponder: (evt, gestureState) => true,
                onPanResponderMove: (evt, gestureState) => {
//              On Android I have to use evt.nativeEvent.locationY + gestureState.dy
//                    console.log(gestureState)
//                    console.log("locationX: " + evt.nativeEvent.locationX)
//                    console.log("locationY: " + evt.nativeEvent.locationY)
                    this._computeHandTouch(evt, gestureState)
                    this._computeDirection(evt, gestureState)
                },
                onPanResponderStart: (evt, gestureState) => {
//                    console.log("Touch")
//                    console.log(gestureState)
                    this._computeHandTouch(evt, gestureState)
                },
                onPanResponderRelease: (evt, gestureState) => {
                    console.log("Release")
                    let allTouched = true;

                    if (this.state.lastTouchOnTouchable)
                        this.setState({lastUsedId: this.state.lastUsedId + 1})
                    for (let i = 0; i < this.state.letterDetect.length; i += 1) {
                        for (let j = 0; j < this.state.letterDetect[i].zones.length; j += 1) {
                            let index = this.state.touchableDetect.findIndex(x => x.id === 
                            this.state.letterDetect[i].zones[j]);
                            if (this.state.touchableDetect[index].touched === false)
                                allTouched = false;
                        }
                        if (allTouched === true) {
                            console.log("allTouched for: " + this.state.letterDetect[i].letter)
                            if (this.state.letterDetect[i].type === 'slideTouch' && 
                            (this.state.letterDetect[i].direction === undefined ||
                            this.state.letterDetect[i].direction === this.state.direction ||
                            (this.state.letterDetect[i].alternativeDirection !== undefined &&
                            this.state.letterDetect[i].alternativeDirection === 
                            this.state.direction))) {
                                console.log('slideTouch')
                                let prevId = -2;
                                let validated = true
                                for (let j = 0; j < this.state.letterDetect[i].zones.length; j += 1) {
                                    let index = this.state.touchableDetect.findIndex(x => x.id === this.state.letterDetect[i].zones[j]);
                                    if (j >= 1 && prevId !== this.state.touchableDetect[index].touchId) {
                                        validated = false
                                        break;
                                    }
                                    prevId = this.state.touchableDetect[index].touchId;
                                }
                                if (validated) {
                                    console.log("Touching letter: " + this.state.letterDetect[i].letter)
                                    this.setState({input: this.state.input + this.state.letterDetect[i].letter})
                                    this._clearTouch();
                                }
                            } 
                            else if (this.state.letterDetect[i].type === 'simultaneousTouch') {
                                console.log("SimultaneousTouch")
                                let validated = true;
                                for (let j = 0; j < this.state.letterDetect[i].zones.length; j += 1) {
                                    let index = this.state.touchableDetect.findIndex(x => x.id === this.state.letterDetect[i].zones[j]);
                                    if ((this.state.letterDetect[i].nbOfTouch !== undefined &&
                                    this.state.letterDetect[i].nbOfTouch !== this.state.touchableDetect[index].maxSimultaneousTouchOnZone)) {
                                        //NE PAS CLEAR SI C'EST 'F' PAR EXEMPLE
                                        console.log("Nombre de touche invalide")
                                        validated = false
                                        break;
                                    }
                                }
                                for (let k = 0; validated && k < this.state.touchableDetect.length; k += 1) {
                                    if (this.state.touchableDetect[k].touched && this.state.letterDetect[i].zones.findIndex(x => x === this.state.touchableDetect[k].id) === -1) {
                                        console.log("Zone: " + this.state.touchableDetect[k].id + " as been touch but we don't want it to")
                                        validated = false
                                        break;
                                    }
                                }
                                if (validated) {
                                    console.log("Touching letter: " + this.state.letterDetect[i].letter)
                                    this.setState({input: this.state.input + this.state.letterDetect[i].letter})
                                    this._clearTouch();
                                }
                            }
                            else if (this.state.letterDetect[i].type === 'alternateTouch') {
                                console.log('alternateTouch')
                            }
                        }
                        allTouched = true;
                    }
                }
            }
        )
//        this._handleClick = this._handleClick.bind(this);
    }

    _percentageOf(oneHundredPercentage, value) {
        return ((value * 100) / oneHundredPercentage)
    }

    _clearTouch() {
        let tmp = [...this.state.touchableDetect];
        for (let i = 0; i < tmp.length; i += 1) {
            tmp[i].touched = false
            tmp[i].touchId = -1
            tmp[i].maxSimultaneousTouchOnZone = -1
        }
        this.setState({touchableDetect: tmp, direction: 'None'});
    }

    _clearTouchIndex(index) {
        let tmp = [...this.state.touchableDetect];
        tmp[index].touched = false
        tmp[index].touchId = -1
        tmp[index].maxSimultaneousTouchOnZone = -1
        this.setState({touchableDetect: tmp});      
    }

    _computeDirection(evt, gestureState) {
        absDx = Math.abs(gestureState.dx)
        absDy = Math.abs(gestureState.dy)
        if (absDx > absDy && gestureState.dx > 0) {
            this.setState({direction: 'Left to Right'})
            console.log("Left to Right")
        } else if (absDx > absDy && gestureState.dx < 0) {
            this.setState({direction: 'Right to Left'})
            console.log("Right to Left")
        } else if (absDy > absDx && gestureState.dy > 0) {
            this.setState({direction: 'Top to Bottom'})
            console.log("Top to Bottom")
        } else if (absDy > absDx && gestureState.dy < 0) {
            this.setState({direction: 'Bottom to Top'})
            console.log("Bottom to Top")
        }
    }

    _computeHandTouch(evt, gestureState) {
        const { touchableDetect, imageHandWidth, imageHandHeight } = this.state;
        let percentageX = this._percentageOf(imageHandWidth, evt.nativeEvent.locationX)
        let percentageY = this._percentageOf(imageHandHeight, evt.nativeEvent.locationY)
        let passed = false;

//        console.log("Touch at X:" + percentageX + '%')
//        console.log("Touch at Y:" + percentageY + '%')
        for (let i = 0; i < touchableDetect.length; i += 1) {
            if (percentageX >= touchableDetect[i].px0 && percentageX <= touchableDetect[i].px1 &&
            percentageY >= touchableDetect[i].py0 && percentageY <= touchableDetect[i].py1) {
                let tmp = [...this.state.touchableDetect];
                tmp[i].touched = true
                tmp[i].touchId = this.state.lastUsedId
                tmp[i].maxSimultaneousTouchOnZone = gestureState.numberActiveTouches
                this.setState({touchableDetect: tmp});
                console.log("Touch zone : " + touchableDetect[i].id);
                this.setState({debugLastX0: (touchableDetect[i].px0 * imageHandWidth) / 100})
                this.setState({debugLastX1: (touchableDetect[i].px1 * imageHandWidth) / 100})
                this.setState({debugLastY0: (touchableDetect[i].py0 * imageHandHeight) / 100})
                this.setState({debugLastY1: (touchableDetect[i].py1 * imageHandHeight) / 100})
                passed = true;
            }
        }
        if (passed === false)
            this.setState({lastTouchOnTouchable: false});
        // console.log(touchableDetect[9]);
        // console.log(touchableDetect[10]);
        // console.log(touchableDetect[11]);
        // console.log(touchableDetect[12]);
        // console.log(touchableDetect[18]);
    }

    componentDidMount() {
        setTimeout(() => (this.mainComponent.measure( (fx, fy, width, height, px, py) => {
            if (this.state.imageHandX === -1)
                this.setState({imageHandX: px});
            if (this.state.imageHandY === -1)
                this.setState({imageHandY: py});
            if (this.state.imageHandWidth === -1)
                this.setState({imageHandWidth: width});
            if (this.state.imageHandHeight === -1)
                this.setState({imageHandHeight: height});
        })), 0)      
    }

    render() {

        return (
            <View style={styles.container}>
                <View top={this.state.debugLastY0} left={this.state.debugLastX0}
                width={this.state.debugLastX1 - this.state.debugLastX0}
                height={this.state.debugLastY1 - this.state.debugLastY0}
                backgroundColor='salmon' style={styles.rectangle}></View>
                <Image style={styles.handImage} source={require('../../assets/hand.png')}
                {...this._panResponder.panHandlers}
                ref={view => { this.mainComponent = view; }}/>
                <Text>{this.state.input}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: '7%',
        width: '100%',
        height: '100%',
    },
    handImage: {
//        resizeMode: 'contain',
        width: ScreenDim.width,
        height: 500,
    },
    rectangle: {
        position: 'absolute', 
        zIndex: 1,
    },
});

export default MainComponent;

{/* <Button
onPress={this._handleClick}
title="Learn More"
color="#841584"
accessibilityLabel="Learn more about this purple button"
/> */}