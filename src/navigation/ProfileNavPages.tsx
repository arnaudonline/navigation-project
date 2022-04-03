import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native";

import ProfileScreen from "../screens/ProfileScreen";
import AboutMe from "../screens/AboutMe";
import MoreInfos from "../screens/MoreInfos";

const Stack = createNativeStackNavigator();

const ProfileNavPages = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="My profile"
        component={ProfileScreen}
        options={{
          headerLeft: () => (
            <Button onPress={() => navigation.openDrawer()} title="Menu" />
          ),
        }}
      />
      <Stack.Screen name="About Me" component={AboutMe} />
      <Stack.Screen name="More Infos" component={MoreInfos} />
    </Stack.Navigator>
  );
};

export default ProfileNavPages;
