import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from '../components/home/HomeComponent'
import MainScreen from '../components/main/MainComponent'
import ExerciseScreen from '../components/exercise/ExerciseComponent';
import GameScreen from '../components/game/GameComponent';
import OnePlayerScreen from '../components/game/OnePlayerComponent';
import TwoPlayerScreen from '../components/game/TwoPlayerComponent';

noHeader = {
    header: null
}

AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: noHeader
    },
    Main: {
        screen: MainScreen,
        navigationOptions: noHeader
    },
    Exercise: {
        screen: ExerciseScreen,
        navigationOptions: noHeader
    },
    Game: {
        screen: GameScreen,
        navigationOptions: noHeader
    },
    OnePlayer: {
        screen: OnePlayerScreen,
        navigationOptions: noHeader
    },
    TwoPlayer: {
        screen: TwoPlayerScreen,
        navigationOptions: noHeader
    },
})

export default createAppContainer(AppNavigator)