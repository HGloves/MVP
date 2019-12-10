import React from 'react';
import { PanResponder } from 'react-native';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

const DEBUG = true;

/*
HandComponent:

    Props obligatoirement:
    - 'updateInput' => Une method du père qui prend en paramètre un charactère.
    Cette méthode sera appelé a chaque fois que HandComponent détecte
    une nouvelle lettre validé.

    Props secondaire:
    - 'style' => style à appliquer.
*/

class HandComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            imageHandWidth: -1,
            imageHandHeight: -1,
            lastUsedId: 0,
            direction: 'None',
            input: '',
            lastLetter: '',
            prevNbOfTouch: -1,
            alwaysTolerated: ['F0', 'F1', 'R0', 'R1', 'R2', 'R3'],
            touchableDetect: [
                {id: 'A', px0: 5, px1: 20, py0: 40, py1: 45, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},

                {id: 'T0', px0: 5, px1: 25, py0: 45, py1: 55, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'T1', px0: 10, px1: 30, py0: 50, py1: 60, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},

                {id: 'E', px0: 30, px1: 45, py0: 5, py1: 15, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'O', px0: 65, px1: 80, py0: 5, py1: 15, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'U', px0: 80, px1: 95, py0: 25, py1: 30, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'M', px0: 70, px1: 85, py0: 40, py1: 52.5, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'C', px0: 40, px1: 70, py0: 80, py1: 95, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},
                {id: 'N', px0: 30, px1: 45, py0: 35, py1: 47.5, touchId: -1, touched: false,
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

                {id: 'P2', px0: 25, px1: 35, py0: 35, py1: 45, touchId: -1, touched: false,
                    maxSimultaneousTouchOnZone: -1},

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
            {letter: 'M', zones: ['M'], type: 'simultaneousTouch', nbOfTouch: 1, toleratedZones: ['Y1', 'Q0']},
            {letter: 'N', zones: ['N'], type: 'simultaneousTouch', nbOfTouch: 1, toleratedZones: ['Y0', 'P2', 'B2']},
            {letter: 'X', zones: ['X0', 'C', 'X2'], type: 'slideTouch', direction: 'Left to Right'},
            {letter: 'C', zones: ['C'], type: 'simultaneousTouch', nbOfTouch: 1, toleratedZones: ['X0', 'X2']},
            {letter: 'Ç', zones: ['C'], type: 'simultaneousTouch', nbOfTouch: 2, toleratedZones: ['X0', 'X2']},
            {letter: 'K', zones: ['K'], type: 'simultaneousTouch', nbOfTouch: 4, toleratedZones: ['L1', 'L2', 'Z0', 'Z1', 'Z2', 'S0', 'S1', 'S2', 'S3', 'Q0', 'Q1']},
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
                if (this.state.prevNbOfTouch !== -1 &&
                this.state.prevNbOfTouch !== gestureState.numberActiveTouches)
                    this.setState({lastUsedId: this.state.lastUsedId + 1})
                this.setState({prevNbOfTouch: gestureState.numberActiveTouches})
//              On Android I have to use evt.nativeEvent.locationY + gestureState.dy
//                    this._debug("locationX: " + evt.nativeEvent.locationX)
//                    this._debug("locationY: " + evt.nativeEvent.locationY)
                    this._computeHandTouch(evt, gestureState)
                    this._computeDirection(evt, gestureState)
                },
                onPanResponderStart: (evt, gestureState) => {
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
                    let allTouched = true;
                    let validated = true;

                    this.setState({lastUsedId: this.state.lastUsedId + 1})
                    for (let i = 0, len_i = this.letterDetect.length; i < len_i; i += 1) {
                        for (let j = 0, len_j = this.letterDetect[i].zones.length; j < len_j; j += 1) {
                            let index = this.state.touchableDetect.findIndex(x => x.id ===
                                this.letterDetect[i].zones[j]);
                            if (index >= 0 && this.state.touchableDetect[index].touched === false) {
//                                this._debug(this.letterDetect[i].letter + ': missing ' + this.state.touchableDetect[index].id);
                                allTouched = false;
                            }
                        }
                        if (allTouched === true) {
                            validated = true;
                            this._debug("allTouched for: " + this.letterDetect[i].letter)
                            if (this.letterDetect[i].type === 'slideTouch' &&
                                (this.letterDetect[i].direction === undefined ||
                                this.letterDetect[i].direction === this.state.direction ||
                                (this.letterDetect[i].alternativeDirection === this.state.direction))) {
                                this._debug('slideTouch')
                                let prevId = -2;
                                for (let j = 0, len_j = this.letterDetect[i].zones.length; j < len_j; j += 1) {
                                    let index = this.state.touchableDetect.findIndex(x => x.id === this.letterDetect[i].zones[j]);
                                    if (j >= 1 && prevId !== this.state.touchableDetect[index].touchId) {
                                        this._debug('InvalidTouch: TouchId differ (' +  prevId + ' : ' + this.state.touchableDetect[index].touchId + ')')
                                        validated = false
                                        break;
                                    }
                                    prevId = this.state.touchableDetect[index].touchId;
                                }
                            }  
                            else if (this.letterDetect[i].type === 'simultaneousTouch') {
                                this._debug("SimultaneousTouch")
                                for (let j = 0, len_j = this.letterDetect[i].zones.length; j < len_j; j += 1) {
                                    let index = this.state.touchableDetect.findIndex(x => x.id === this.letterDetect[i].zones[j]);
                                    if ((this.letterDetect[i].nbOfTouch !== undefined &&
                                        this.letterDetect[i].nbOfTouch !== this.state.touchableDetect[index].maxSimultaneousTouchOnZone)) {
                                        this._debug("Nombre de touche invalide")
                                        validated = false
                                        break;
                                    }
                                }
                                for (let k = 0, len_k = this.state.touchableDetect.length; validated && k < len_k; k += 1) {
                                    if (this.state.touchableDetect[k].touched &&
                                    this.letterDetect[i].zones.findIndex(x => x === this.state.touchableDetect[k].id) === -1 &&
                                    this.letterDetect[i].toleratedZones !== 'ALL' &&
                                    (this.letterDetect[i].toleratedZones === undefined ||
                                    this.letterDetect[i].toleratedZones.findIndex(x => x === this.state.touchableDetect[k].id) === -1) &&
                                    (this.state.alwaysTolerated.findIndex(x => x === this.state.touchableDetect[k].id) === -1)) {
                                        this._debug("Zone: " + this.state.touchableDetect[k].id + " as been touch but we don't want it to")
                                        validated = false
                                        break;
                                    }
                                }
                            }
                            else if (this.letterDetect[i].type === 'alternateTouch') {
                                this._debug('alternateTouch')
                                for (let k = 0, len_k = this.letterDetect[i].zones.length; validated && k < len_k; k += 1) {
                                    let index = this.state.touchableDetect.findIndex(x => x.id === 
                                    this.letterDetect[i].zones[k]);
                                    for (let m = 0, len_m = this.letterDetect[i].zones.length; validated && m < len_m; m += 1) {
                                        let index_bis = this.state.touchableDetect.findIndex(x => x.id === 
                                            this.letterDetect[i].zones[m]);
                                        if (index !== index_bis && this.state.touchableDetect[index].touchId ===
                                        this.state.touchableDetect[index_bis].touchId) {
                                            this._debug('InvalidTouch: ' + this.state.touchableDetect[index].id + ' and ' +
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
                                this._debug("Touching letter: " + this.letterDetect[i].letter)
                                this.setState({input: this.state.input + this.letterDetect[i].letter})
                                this.setState({lastLetter: this.letterDetect[i].letter})
                                this.props.updateInput(this.letterDetect[i].letter)
                                this._clearTouch();
                            }
                        }
                        allTouched = true;
                    }
                    this._clearTouch(['F0', 'R0', 'R1', 'R2', 'R3']);
                }
            }
        )
    }

    _debug(msg) {
        if (DEBUG)
            console.log(msg)
    }

    _percentageOf(oneHundredPercentage, value) {
        return ((value * 100) / oneHundredPercentage)
    }

    _clearTouch(notToClear) {
        let tmp = [...this.state.touchableDetect];
        for (let i = 0, len_i = tmp.length; i < len_i; i += 1) {
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
        } else if (absDx > absDy && gestureState.dx < 0) {
            this.setState({direction: 'Right to Left'})
        } else if (absDy > absDx && gestureState.dy > 0) {
            this.setState({direction: 'Top to Bottom'})
        } else if (absDy > absDx && gestureState.dy < 0) {
            this.setState({direction: 'Bottom to Top'})
        }
    }

    _computeHandTouch(evt, gestureState) {
        const { touchableDetect, imageHandWidth, imageHandHeight } = this.state;
        let percentageX = this._percentageOf(imageHandWidth, evt.nativeEvent.locationX)
        let percentageY = this._percentageOf(imageHandHeight, evt.nativeEvent.locationY)
        let tmp = [...this.state.touchableDetect];

        for (let i = 0, len_i = touchableDetect.length; i < len_i; i += 1) {
            if (percentageX >= touchableDetect[i].px0 && percentageX <= touchableDetect[i].px1 &&
                percentageY >= touchableDetect[i].py0 && percentageY <= touchableDetect[i].py1) {
                tmp[i].touched = true
                tmp[i].touchId = this.state.lastUsedId
                tmp[i].maxSimultaneousTouchOnZone = gestureState.numberActiveTouches
                this._debug("Touch zone : " + touchableDetect[i].id);
                this.setState({debugLastX0: (touchableDetect[i].px0 * imageHandWidth) / 100})
                this.setState({debugLastX1: (touchableDetect[i].px1 * imageHandWidth) / 100})
                this.setState({debugLastY0: (touchableDetect[i].py0 * imageHandHeight) / 100})
                this.setState({debugLastY1: (touchableDetect[i].py1 * imageHandHeight) / 100})
            }
        }
        this.setState({touchableDetect: tmp});
    }

    componentDidMount() {
        setTimeout(() => (this.mainComponent.measure((fx, fy, width, height, px, py) => {
            if (this.state.imageHandWidth === -1)
                this.setState({ imageHandWidth: width });
            if (this.state.imageHandHeight === -1)
                this.setState({ imageHandHeight: height });
        })), 0);
    }

    render() {
        return (
            <Image style={this.props.style} source={require('../../assets/hand.png')}
                ref={view => { this.mainComponent = view; }}
                {...this._panResponder.panHandlers}/>
        );
    }
}

HandComponent.propTypes = {
    updateInput: PropTypes.func.isRequired,
    style: PropTypes.any,
  };

export default HandComponent;



{/*
import { Dimensions } from 'react-native'

const ScreenDim = Dimensions.get("window");
const imageWidth = ScreenDim.width * 90 / 100;
const imageHeight = Math.round(imageWidth * 2400 / 1920);

<View top={this.state.debugLastY0} left={(ScreenDim.width - imageWidth) / 2 + this.state.debugLastX0}
width={this.state.debugLastX1 - this.state.debugLastX0}
height={this.state.debugLastY1 - this.state.debugLastY0}
backgroundColor='salmon' style={styles.rectangle}></View>
*/}
