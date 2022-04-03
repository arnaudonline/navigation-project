import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import { Button } from "react-native";

import HomeScreen from "../screens/HomeScreen";
import BottomTabs from "./BottomTabs";
import ProfileNavPages from "./ProfileNavPages";

const Drawer = createDrawerNavigator();

const BurgerMenu = ({ navigation }) => {
  return (
    <Drawer.Navigator initialRouteName="Home with BottomTabs" >
      <Drawer.Screen
        name="Home with BottomTabs"
        component={BottomTabs}
        options={{
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate("Profile")}
              title="Profile"
            />
          ),
        }}
      />
      <Drawer.Screen name="Profile" component={ProfileNavPages} options={{headerShown: false}} />
    </Drawer.Navigator>
  );
};

export default BurgerMenu;
