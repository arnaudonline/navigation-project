import { View, Text } from "react-native";

const AboutMe = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, color: "blue" }}>
        This is my app with React Navigation !
      </Text>
    </View>
  );
};

export default AboutMe;
