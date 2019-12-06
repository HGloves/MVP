import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from '../components/home/HomeComponent'
import MainScreen from '../components/main/MainComponent'

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
    }
})

export default createAppContainer(AppNavigator)