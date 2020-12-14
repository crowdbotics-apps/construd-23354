import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen3184995Navigator from '../features/BlankScreen3184995/navigator';
import BlankScreen2184994Navigator from '../features/BlankScreen2184994/navigator';
import BlankScreen1184993Navigator from '../features/BlankScreen1184993/navigator';
import BlankScreen0184991Navigator from '../features/BlankScreen0184991/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen3184995: { screen: BlankScreen3184995Navigator },
BlankScreen2184994: { screen: BlankScreen2184994Navigator },
BlankScreen1184993: { screen: BlankScreen1184993Navigator },
BlankScreen0184991: { screen: BlankScreen0184991Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
