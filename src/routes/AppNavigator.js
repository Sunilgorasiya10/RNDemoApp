import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/Login';
import { createAppContainer } from 'react-navigation';
import Registration from '../screens/Registration';
import UserList from '../screens/UserList';

const AutoStack = createStackNavigator({
    Login: { screen: Login },
    Registration: { screen: Registration },
    UserList: { screen: UserList },
}, {
    headerMode: 'none'
})

const AppNavigation = createAppContainer(AutoStack)
export default AppNavigation;
