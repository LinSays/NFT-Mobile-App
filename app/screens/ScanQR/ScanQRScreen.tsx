import * as React from "react";
import {
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  Animated,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useEffect } from "react";

import { Text, Icon } from "components";
import { navigate } from "navigation";
import { NavStatelessComponent } from "interfaces";
import { Colors } from "style";

import styles from "./ScanQRScreen.styles";
import navigationOptions from "./ScanQRScreen.navigationOptions";
import imagesPath from "../../constant/imagePath";
import imagePath from "../../constant/imagePath";
import { BlurView } from 'expo-blur';

const { width, height } = Dimensions.get("window");

const ScanQRScreen: NavStatelessComponent = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const [scannerPos, setScannerPos] = useState(new Animated.Value(0));
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      // The screen is focused
      // Call any action
      Animated.loop(
        Animated.sequence([
          Animated.timing(scannerPos, {
            toValue: width - 140,
            useNativeDriver: true,
            duration: 1000,
          }),
          Animated.timing(scannerPos, {
            toValue: 0,
            useNativeDriver: true,
            duration: 1000,
          }),
        ]),
        { iterations: 2 }
      ).start();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);
  return (
    <SafeAreaView style={styles.wholeScreen}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigator.navigateLogin()} style={styles.logoContainer}>
          <Image source={imagesPath["logo"]} />
        </TouchableOpacity>
        <View style={styles.hamburgerBtn}>
          <TouchableOpacity onPress={() => console.log("To be implemented")}>
            <Icon fill="none" width="40" height="40" name={"Hamburger"} />
          </TouchableOpacity>
        </View>
      </View>
      {/* Container */}
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.title}>
            <Text.Primary style={styles.titleLabel}>{"Collected"}</Text.Primary>
            <Text.Primary style={styles.itemCount}>{"0 Items"}</Text.Primary>
          </View>
          <View>
            <View style={styles.qrContainer}>
              <View style={styles.qrImg}>
                <Image source={imagesPath["qr"]} style={styles.qr} />
              </View>
              <Animated.View style={[styles.qrScanner, { transform: [{ translateY: scannerPos }] }]}>
                <BlurView intensity={4}>
                  <Image
                    source={imagePath["qrScanner"]}
                    style={{width:"100%"}}
                  />
                </BlurView>
              </Animated.View>
              <View style={styles.infoContainer}>
                <Icon fill="none" width="19" height="19" name={"InfoCircle"} />
                <Text.Secondary style={styles.infoString}>
                  {"Please point a camera towards your QR and we'll scan it"}
                </Text.Secondary>
              </View>
              <TouchableOpacity style={[styles.button]} onPress={() => navigator.openScanCamera()}>
                <LinearGradient
                  colors={[Colors.gradientRed1, Colors.gradientRed2]}
                  start={{ x: 0.0, y: 0.0 }}
                  end={{ x: 1.0, y: 0.0 }}
                  style={styles.linearbutton}
                >
                  <View style={styles.buttonLeftPart}>
                    <Icon
                      fill="none"
                      width="20"
                      height="20"
                      name={"Scan"}
                      style={{ marginRight: 13 }}
                    />
                    <Text.Primary style={[styles.buttonText, { color: Colors.white }]}>
                      {"Scan Code"}
                    </Text.Primary>
                  </View>
                  <View style={styles.buttonRightPart}>
                    <Icon
                      fill="none"
                      width="59"
                      height="12"
                      name={"Arrow"}
                      style={{ marginRight: 13 }}
                    />
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.bottomActionContainer}>
            <TouchableOpacity onPress={() => console.log("To be implemented")}>
              <View style={styles.navBtn}>
                <Icon fill="none" width="24" height="24" name={"ArrowLeft"} />
              </View>
            </TouchableOpacity>
            <View style={[styles.navBtn, { paddingHorizontal: 54 }]}>
              <Text.Primary style={styles.bottomLabel}>{"0 Items"}</Text.Primary>
            </View>
            <TouchableOpacity onPress={() => console.log("To be implemented")}>
              <View style={styles.navBtn}>
                <Icon fill="none" width="24" height="24" name={"ArrowRight"} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      {/* end container */}
    </SafeAreaView>
  );
};

ScanQRScreen.navigationOptions = navigationOptions();

export default ScanQRScreen;
