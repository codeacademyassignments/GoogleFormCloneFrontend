import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/Components/HomeScreen/HomeScreen.component';
import CreateForm from './src/Components/CreateForm/CreateForm.component';
// import HomeScreen from './src/Components/FormBlock/FormBlock.component';

const MainNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
  },
  CreateForm: {
    screen: CreateForm,
  },
},
{
  initialRouteName: 'HomeScreen',
});

const App = createAppContainer(MainNavigator);

export default App;
