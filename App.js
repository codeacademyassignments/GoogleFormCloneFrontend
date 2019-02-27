import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/Components/HomeScreen/HomeScreen.component';
// import HomeScreen from './src/Components/FormBlock/FormBlock.component';

const MainNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
  },
},
{
  initialRouteName: 'HomeScreen',
});

const App = createAppContainer(MainNavigator);

export default App;
