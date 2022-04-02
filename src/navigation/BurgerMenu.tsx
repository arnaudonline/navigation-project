import { createDrawerNavigator } from "@react-navigation/drawer";
import 'react-native-gesture-handler';

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Drawer = createDrawerNavigator();

const BurgerMenu = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="My profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

export default BurgerMenu;
