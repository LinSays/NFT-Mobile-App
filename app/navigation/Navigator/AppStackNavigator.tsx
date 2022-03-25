import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Colors } from "style";

import NotSignedInScreen from "../../screens/NotSignedIn";
import ScanQRScreen from "../../screens/ScanQR";
import CollectedScreen from "../../screens/Collected";
import SliderScreen from "../../screens/Slider";
import ScanCameraScreen from "../../screens/ScanCamera";

const AppStack = createStackNavigator();

const AppStackNavigator = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerStyle: { elevation: 0 },
        cardStyle: {},
        headerShown: false,
      }}
    >
      <AppStack.Screen
        name="NotSignedInStack"
        options={{ headerShown: false }}
        component={NotSignedInScreen}
      />
      <AppStack.Screen name="ScanQR" options={{ headerShown: false }} component={ScanQRScreen} />
      <AppStack.Screen
        name="ScanCamera"
        options={{ headerShown: false }}
        component={ScanCameraScreen}
      />
      <AppStack.Screen
        name="Collected"
        options={{ headerShown: false }}
        component={CollectedScreen}
      />
      <AppStack.Screen name="Slider" options={{ headerShown: false }} component={SliderScreen} />
    </AppStack.Navigator>
  );
};

export default AppStackNavigator;
