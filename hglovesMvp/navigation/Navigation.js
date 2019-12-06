import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from '../components/home/HomeComponent'
import MainScreen from '../components/main/MainComponent'

import AnnimationScreen from '../components/annimation/AnnimationComponent'


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
    Annimation: {
        screen: AnnimationScreen,
        navigationOptions: noHeader
    }
})

export default createAppContainer(AppNavigator)