import { createDrawerNavigator } from "@react-navigation/drawer";
import 'react-native-gesture-handler';

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import BottomTabs from "./BottomTabs";

const Drawer = createDrawerNavigator();

const BurgerMenu = () => {
  return (
    <Drawer.Navigator initialRouteName="Home with BottomTabs">
      <Drawer.Screen name='Home with BottomTabs' component={BottomTabs} />
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="My profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

export default BurgerMenu;
