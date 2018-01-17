import { DrawerNavigator } from 'react-navigation';

import Users from './Users';
import Settings from './Settings';

const App = DrawerNavigator({
  Users: {
    screen: Users
  },
  Settings: {
    screen: Settings
  }
});