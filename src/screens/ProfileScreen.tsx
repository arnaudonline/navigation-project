import { View, Text, Button } from "react-native"; 

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{ fontSize: 20, color: 'green'}}>My profile !</Text>
      <Button title='About Me' onPress={ () => navigation.navigate('About Me') }/>
      <Button title='More Infos' onPress={ () => navigation.navigate('More Infos') }/>
    </View>
  );
};

export default ProfileScreen;
