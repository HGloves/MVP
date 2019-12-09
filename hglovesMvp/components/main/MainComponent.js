import React from 'react';
import { Dimensions } from 'react-native'
import { PanResponder, Button } from 'react-native';
import update from 'immutability-helper';
import { StyleSheet, View, Image, Text } from 'react-native';
import RecordButton from './RecordButton'
import { IconButton } from 'react-native-paper';
import HelpComponent from './HelpComponent';
import ExerciseListComponent from '../exercise/ExerciseListComponent';

const ScreenDim = Dimensions.get("window");
const imageWidth = ScreenDim.width * 90 / 100;
const imageHeight = Math.round(imageWidth * 2400 / 1920);

class MainComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            helpStatus: false,
            exerciseStatus: false,
            imageHandX: -1,
            imageHandY: -1,
            imageHandWidth: -1,
            imageHandHeight: -1,
            lastUsedId: 0,
            lastTouchOnTouchable: true,
            direction: 'None',
            input: '',
            lastLetter: '',
            prevNbOfTouch: -1,
            alwaysTolerated: ['F0', 'F1', 'R0', 'R1', 'R2', 'R3'],
            touchableDetect: [
                {id: 'A', px0: 5, px1: 20, py0: 40, py1: 45, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},

                {id: 'T0', px0: 5, px1: 20, py0: 45, py1: 50, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'T1', px0: 10, px1: 25, py0: 50, py1: 55, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},

                {id: 'E', px0: 30, px1: 45, py0: 5, py1: 15, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'O', px0: 65, px1: 80, py0: 5, py1: 15, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'U', px0: 80, px1: 95, py0: 25, py1: 30, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'M', px0: 70, px1: 85, py0: 40, py1: 50, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'C', px0: 40, px1: 70, py0: 80, py1: 95, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'N', px0: 30, px1: 45, py0: 35, py1: 45, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'K', px0: 40, px1: 70, py0: 50, py1: 75, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'I/J', px0: 45, px1: 60, py0: 5, py1: 10, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},

                {id: 'D0', px0: 45, px1: 60, py0: 15, py1: 25, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'D1', px0: 45, px1: 60, py0: 25, py1: 35, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},

                {id: 'L0', px0: 45, px1: 60, py0: 35, py1: 50, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'L1', px0: 45, px1: 60, py0: 50, py1: 65, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'L2', px0: 45, px1: 60, py0: 65, py1: 80, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},

                {id: 'Z0', px0: 45, px1: 65, py0: 70, py1: 80, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'Z1', px0: 60, px1: 80, py0: 55, py1: 65, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},

//                {id: 'P0', px0: 25, px1: 35, py0: 15, py1: 25, touchId: -1, touched: false,
//                    maxSimultaneousTouchOnZone: -1},
//                {id: 'P1', px0: 25, px1: 35, py0: 25, py1: 35, touchId: -1, touched: false,
//                    maxSimultaneousTouchOnZone: -1},
                {id: 'P2', px0: 25, px1: 35, py0: 35, py1: 45, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},

//                {id: 'V/W', px0: 25, px1: 40, py0: 70, py1: 85, touchId: -1, touched: false,
//                    maxSimultaneousTouchOnZone: -1},

                {id: 'B0', px0: 30, px1: 45, py0: 20, py1: 30, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'B1', px0: 30, px1: 45, py0: 30, py1: 40, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},

                {id: 'G0', px0: 65, px1: 75, py0: 15, py1: 25, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'G1', px0: 65, px1: 75, py0: 25, py1: 35, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},

                {id: 'H0', px0: 80, px1: 90, py0: 30, py1: 40, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
//                {id: 'H1', px0: 80, px1: 90, py0: 35, py1: 40, touchId: -1, touched: false,
//                    maxSimultaneousTouchOnZone: -1},
//                {id: 'H2', px0: 75, px1: 85, py0: 40, py1: 45, touchId: -1, touched: false,
//                    maxSimultaneousTouchOnZone: -1},


                {id: 'F0', px0: 25, px1: 35, py0: 10, py1: 35, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'F1', px0: 55, px1: 60, py0: 10, py1: 35, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},

                {id: 'X0', px0: 35, px1: 45, py0: 85, py1: 95, touchId: -1, touched: false,
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

                {id: 'R3+V/W', px0: 20, px1: 40, py0: 60, py1: 85, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'R2', px0: 40, px1: 55, py0: 60, py1: 80, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'R1', px0: 55, px1: 70, py0: 60, py1: 80, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'R0', px0: 70, px1: 85, py0: 60, py1: 80, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
            ],
            debugLastX0: 0,
            debugLastX1: 10,
            debugLastY0: 0,
            debugLastY1: 10,
        };

        this.letterDetect = [
            {letter: 'S', zones: ['S0', 'S1', 'S2', 'S3'], type: 'slideTouch'},
            {letter: 'A', zones: ['A'], type: 'simultaneousTouch', nbOfTouch: 1},
            {letter: 'E', zones: ['E'], type: 'simultaneousTouch', nbOfTouch: 1},
            {letter: 'P', zones: ['F0', 'P2'], type: 'slideTouch', direction: 'Bottom to Top'},
            {letter: 'O', zones: ['O'], type: 'simultaneousTouch', nbOfTouch: 1},
            {letter: 'U', zones: ['U'], type: 'simultaneousTouch', nbOfTouch: 1},
            {letter: 'M', zones: ['M'], type: 'simultaneousTouch', nbOfTouch: 1},
            {letter: 'N', zones: ['N'], type: 'simultaneousTouch', nbOfTouch: 1, toleratedZones: ['Y0', 'P2', 'B2']},
            {letter: 'X', zones: ['X0', 'C', 'X2'], type: 'slideTouch', direction: 'Left to Right'},
            {letter: 'C', zones: ['C'], type: 'simultaneousTouch', nbOfTouch: 1, toleratedZones: ['X0', 'X2']},
            {letter: 'Ç', zones: ['C'], type: 'simultaneousTouch', nbOfTouch: 2, toleratedZones: ['X0', 'X2']},
            {letter: 'K', zones: ['K'], type: 'simultaneousTouch', nbOfTouch: 4, toleratedZones: ['L1', 'L2', 'Z0', 'Z1', 'Z2', 'S0', 'S1', 'S2', 'S3']},
            {letter: 'I', zones: ['I/J'], type: 'simultaneousTouch', nbOfTouch: 1},
            {letter: 'J', zones: ['I/J'], type: 'simultaneousTouch', nbOfTouch: 2},
            {letter: 'R', zones: ['R0', 'R1', 'R2', 'R3+V/W'], type: 'alternateTouch'},
            {letter: 'V', zones: ['R3+V/W'], type: 'simultaneousTouch', nbOfTouch: 1, toleratedZones: ['K', 'S3']},
            {letter: 'W', zones: ['R3+V/W'], type: 'simultaneousTouch', nbOfTouch: 2, toleratedZones: ['K', 'S3']},
            {letter: 'B', zones: ['B0', 'B1'], type: 'slideTouch', direction: 'Top to Bottom'},
            {letter: 'L', zones: ['D0', 'D1', 'L0', 'L1', 'L2'], type: 'slideTouch', direction: 'Top to Bottom'},
            {letter: 'D', zones: ['D0', 'D1'], type: 'slideTouch', direction: 'Top to Bottom'},
            {letter: 'G', zones: ['G0', 'G1'], type: 'slideTouch', direction: 'Top to Bottom'},
            {letter: 'H', zones: ['H0', 'M'], type: 'slideTouch', direction: 'Top to Bottom'},
            {letter: 'F', zones: ['F0', 'F1'], type: 'alternateTouch'},
            {letter: 'T', zones: ['T0', 'T1'], type: 'slideTouch', direction: 'Top to Bottom', alternativeDirection: 'Left to Right'},
            {letter: 'Z', zones: ['Z0', 'Z1'], type: 'slideTouch', direction: 'Left to Right', alternativeDirection: 'Bottom to Top'},
            {letter: 'Q', zones: ['Q0', 'Q1', 'Q2'], type: 'slideTouch', direction: 'Bottom to Top'},
            {letter: 'Y', zones: ['Y0', 'L0', 'Y1'], type: 'slideTouch', direction: 'Left to Right'},
        ]

        this._panResponder = PanResponder.create(
            {
                onStartShouldSetPanResponder: (evt, gestureState) => true,
                onPanResponderMove: (evt, gestureState) => {
//                    console.log("Move")
                if (this.state.prevNbOfTouch !== -1 &&
                this.state.prevNbOfTouch !== gestureState.numberActiveTouches)
                    this.setState({lastUsedId: this.state.lastUsedId + 1})
                this.setState({prevNbOfTouch: gestureState.numberActiveTouches})
//              On Android I have to use evt.nativeEvent.locationY + gestureState.dy
//                    console.log(gestureState)
//                    console.log("locationX: " + evt.nativeEvent.locationX)
//                    console.log("locationY: " + evt.nativeEvent.locationY)
                    this._computeHandTouch(evt, gestureState)
                    this._computeDirection(evt, gestureState)
                },
                onPanResponderStart: (evt, gestureState) => {
//                    console.log("Touch")
//                   console.log(gestureState)
                    if (this.state.prevNbOfTouch !== gestureState.numberActiveTouches &&
                        gestureState.numberActiveTouches === 5) {
                        this.setState({input: this.state.input + ' '})
                        this.setState({lastLetter: ' '})
                    } else {                    
                        this._computeHandTouch(evt, gestureState)
                    }
                    this.setState({prevNbOfTouch: gestureState.numberActiveTouches})
                },
                onPanResponderRelease: (evt, gestureState) => {
//                    console.log("Release")
                    let allTouched = true;
                    let validated = true;

                    console.log("=======================NEW TURN==================")
//                    if (this.state.lastTouchOnTouchable)
                        this.setState({lastUsedId: this.state.lastUsedId + 1})
                    for (let i = 0; i < this.letterDetect.length; i += 1) {
                        for (let j = 0; j < this.letterDetect[i].zones.length; j += 1) {
                            let index = this.state.touchableDetect.findIndex(x => x.id ===
                                this.letterDetect[i].zones[j]);
                            if (index >= 0 && this.state.touchableDetect[index].touched === false) {
//                                console.log(this.letterDetect[i].letter + ': missing ' + this.state.touchableDetect[index].id);
                                allTouched = false;
                            }
                        }
                        if (allTouched === true) {
                            validated = true;
                            console.log("allTouched for: " + this.letterDetect[i].letter)
                            if (this.letterDetect[i].type === 'slideTouch' &&
                                (this.letterDetect[i].direction === undefined ||
                                    this.letterDetect[i].direction === this.state.direction ||
                                    (this.letterDetect[i].alternativeDirection !== undefined &&
                                        this.letterDetect[i].alternativeDirection ===
                                        this.state.direction))) {
                                console.log('slideTouch')
                                let prevId = -2;
                                for (let j = 0; j < this.letterDetect[i].zones.length; j += 1) {
                                    let index = this.state.touchableDetect.findIndex(x => x.id === this.letterDetect[i].zones[j]);
                                    if (j >= 1 && prevId !== this.state.touchableDetect[index].touchId) {
                                        console.log('InvalidTouch: TouchId differ (' +  prevId + ' : ' + this.state.touchableDetect[index].touchId + ')')
                                        validated = false
                                        break;
                                    }
                                    prevId = this.state.touchableDetect[index].touchId;
                                }
                            }  
                            else if (this.letterDetect[i].type === 'simultaneousTouch') {
                                console.log("SimultaneousTouch")
                                for (let j = 0; j < this.letterDetect[i].zones.length; j += 1) {
                                    let index = this.state.touchableDetect.findIndex(x => x.id === this.letterDetect[i].zones[j]);
                                    if ((this.letterDetect[i].nbOfTouch !== undefined &&
                                        this.letterDetect[i].nbOfTouch !== this.state.touchableDetect[index].maxSimultaneousTouchOnZone)) {
                                        //NE PAS CLEAR SI C'EST 'F' PAR EXEMPLE
                                        console.log("Nombre de touche invalide")
                                        validated = false
                                        break;
                                    }
                                }
                                for (let k = 0; validated && k < this.state.touchableDetect.length; k += 1) {
                                    if (this.state.touchableDetect[k].touched &&
                                    this.letterDetect[i].zones.findIndex(x => x === this.state.touchableDetect[k].id) === -1 &&
                                    this.letterDetect[i].toleratedZones !== 'ALL' &&
                                    (this.letterDetect[i].toleratedZones === undefined ||
                                    this.letterDetect[i].toleratedZones.findIndex(x => x === this.state.touchableDetect[k].id) === -1) &&
                                    (this.state.alwaysTolerated.findIndex(x => x === this.state.touchableDetect[k].id) === -1)) {
                                        console.log("Zone: " + this.state.touchableDetect[k].id + " as been touch but we don't want it to")
                                        validated = false
                                        break;
                                    }
                                }
                            }
                            else if (this.letterDetect[i].type === 'alternateTouch') {
                                console.log('alternateTouch')
                                for (let k = 0; validated && k < this.letterDetect[i].zones.length; k += 1) {
                                    let index = this.state.touchableDetect.findIndex(x => x.id === 
                                    this.letterDetect[i].zones[k]);
                                    for (let m = 0; validated && m < this.letterDetect[i].zones.length; m += 1) {
                                        let index_bis = this.state.touchableDetect.findIndex(x => x.id === 
                                            this.letterDetect[i].zones[m]);
                                        if (index !== index_bis && this.state.touchableDetect[index].touchId ===
                                        this.state.touchableDetect[index_bis].touchId) {
                                            console.log('InvalidTouch: ' + this.state.touchableDetect[index].id + ' and ' +
                                            this.state.touchableDetect[index_bis].id + ' have the same touchId(' +
                                            this.state.touchableDetect[index].touchId + ')')
                                            validated = false;
                                            break;
                                        }
                                    }
                                }
                            } else {
                                validated = false;
                            }
                            if (validated) {
                                console.log("Touching letter: " + this.letterDetect[i].letter)
                                this.setState({input: this.state.input + this.letterDetect[i].letter})
                                this.setState({lastLetter: this.letterDetect[i].letter})
                                this._clearTouch();
                            }
                        }
                        allTouched = true;
                    }
                    this._clearTouch(['F0', 'R0', 'R1', 'R2', 'R3']);
                }
            }
        )
        //        this._handleClick = this._handleClick.bind(this);
    }

    _percentageOf(oneHundredPercentage, value) {
        return ((value * 100) / oneHundredPercentage)
    }

    _clearTouch(notToClear) {
        let tmp = [...this.state.touchableDetect];
        for (let i = 0; i < tmp.length; i += 1) {
            if (notToClear && notToClear.findIndex(x => x === tmp[i].id) !== -1)
                continue;
            tmp[i].touched = false
            tmp[i].touchId = -1
            tmp[i].maxSimultaneousTouchOnZone = -1
        }
        this.setState({ touchableDetect: tmp, direction: 'None' });
    }

    _clearTouchIndex(index) {
        let tmp = [...this.state.touchableDetect];
        tmp[index].touched = false
        tmp[index].touchId = -1
        tmp[index].maxSimultaneousTouchOnZone = -1
        this.setState({ touchableDetect: tmp });
    }

    _computeDirection(evt, gestureState) {
        absDx = Math.abs(gestureState.dx)
        absDy = Math.abs(gestureState.dy)
        if (absDx > absDy && gestureState.dx > 0) {
            this.setState({direction: 'Left to Right'})
//            console.log("Left to Right")
        } else if (absDx > absDy && gestureState.dx < 0) {
            this.setState({direction: 'Right to Left'})
//            console.log("Right to Left")
        } else if (absDy > absDx && gestureState.dy > 0) {
            this.setState({direction: 'Top to Bottom'})
//            console.log("Top to Bottom")
        } else if (absDy > absDx && gestureState.dy < 0) {
            this.setState({direction: 'Bottom to Top'})
//            console.log("Bottom to Top")
        }
    }

    _computeHandTouch(evt, gestureState) {
        const { touchableDetect, imageHandWidth, imageHandHeight } = this.state;
        let percentageX = this._percentageOf(imageHandWidth, evt.nativeEvent.locationX)
        let percentageY = this._percentageOf(imageHandHeight, evt.nativeEvent.locationY)
        let passed = false;

//        console.log("Entering in _computeHandTouch with this.state.lastUsedId = " + this.state.lastUsedId)
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
    }

    componentDidMount() {
        setTimeout(() => (this.mainComponent.measure((fx, fy, width, height, px, py) => {
            if (this.state.imageHandX === -1)
                this.setState({ imageHandX: px });
            if (this.state.imageHandY === -1)
                this.setState({ imageHandY: py });
            if (this.state.imageHandWidth === -1)
                this.setState({ imageHandWidth: width });
            if (this.state.imageHandHeight === -1)
                this.setState({ imageHandHeight: height });
        })), 0)
    }

    helpStatusHandler = status => {
        this.setState({
            helpStatus: status,
        });
    }

    exerciseStatusHandler = status => {
        this.setState({
            exerciseStatus: status,
        })
    }

    inputHandler = status => {
        this.setState({
            input: status,
        })
    }

    render() {
        const { helpStatus, exerciseStatus, input } = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.handContainer}>
                    <Image style={styles.hand} source={require('../../assets/hand.png')}
                        ref={view => { this.mainComponent = view; }}
                        {...this._panResponder.panHandlers} />
                </View>
                <View style={styles.lormContainer}>
                    <Text style={{ ...styles.lormLetter, fontFamily: 'open-sans-bold' }}>{this.state.lastLetter}</Text>
                </View>
                <View style={styles.actionsContainer}>
                    <RecordButton func={this.inputHandler}/>
                    <View style={styles.inputContainer}>
                        <View style={styles.inputView}>
                            <Text style={{ ...styles.input, fontFamily: 'open-sans-bold' }}>{input}</Text>
                        </View>
                        <IconButton
                            style={styles.exButton}
                            icon="book-open"
                            color={'#1C3956'}
                            onPress={() => this.exerciseStatusHandler(true)}
                        />
                    </View>
                </View>
                <IconButton
                    style={styles.helpButton}
                    icon="alphabetical"
                    color={'#1C3956'}
                    size={50}
                    onPress={() => this.helpStatusHandler(true)}
                />
                <HelpComponent status={helpStatus} handleClose={this.helpStatusHandler} />
                <ExerciseListComponent status={exerciseStatus} handleClose={this.exerciseStatusHandler} {...this.props} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    handContainer: {
        width: '100%',
        height: '78%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    hand: {
        width: imageWidth,
        height: imageHeight
    },
    lormContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '15%'
    },
    lormLetter: {
        color: '#1C3956',
        fontSize: 50
    },
    actionsContainer: {
        position: 'absolute',
        flex: 1,
        flexDirection: 'row',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '7%',
    },
    inputContainer: {
        display: 'flex',
        height: '100%',
        width: '70%',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
    inputView: {
        marginLeft: '8%',
        height: '75%',
        width: '70%',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        backgroundColor: '#F1F0FF',
        justifyContent: 'space-around',
    },
    input: {
        width: '80%',
        marginLeft: '10%',
        color: '#1C3956'
    },
    helpButton: {
        position: 'absolute',
        right: 6,
        top: 6,
    },
    exButton: {
        display: 'flex',
        width: '10%',
    },
    rectangle: {
        position: 'absolute',
        zIndex: 1,
    },
});

export default MainComponent;



{/* <View top={this.state.debugLastY0} left={(ScreenDim.width - imageWidth) / 2 + this.state.debugLastX0}
width={this.state.debugLastX1 - this.state.debugLastX0}
height={this.state.debugLastY1 - this.state.debugLastY0}
backgroundColor='salmon' style={styles.rectangle}></View> */}