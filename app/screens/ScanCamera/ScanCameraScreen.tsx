import * as React from "react";
import { ScrollView, View, TouchableOpacity, Image, Animated, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useEffect } from "react";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
  FontAwesome,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";

import { Text, Icon } from "components";
import { navigate } from "navigation";
import { NavStatelessComponent } from "interfaces";
import { Colors } from "style";

import styles from "./ScanCameraScreen.styles";
import navigationOptions from "./ScanCameraScreen.navigationOptions";
import imagesPath from "../../constant/imagePath";
import imagePath from "../../constant/imagePath";
import { BlurView } from 'expo-blur';

const { width, height } = Dimensions.get("window");
const ScanCameraScreen: NavStatelessComponent = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const [scannerPos, setScannerPos] = useState(new Animated.Value(0));
  useEffect(() => {
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
    ).start(({ finished }) => {
      navigator.openItemSlider();
    });
  }, []);
  return (
    <View style={styles.wholeScreen}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigator.goBack()}>
          <View style={styles.goBackContainer}>
            <AntDesign name="left" style={{ alignSelf: "center" }} color={Colors.white} size={14} />
          </View>
        </TouchableOpacity>
        <Text.Primary style={styles.headerTitle}>{"Scan"}</Text.Primary>
      </View>
      <ScrollView style={styles.wholeScreen}>
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
          
        </View>

        <View style={styles.bottomActionContainer}>
          <View style={styles.infoContainer}>
            <Icon fill="none" width="19" height="19" name={"InfoCircle"} />
            <Text.Secondary style={styles.infoString}>
              {"Please point a camera towards your QR and we'll scan it"}
            </Text.Secondary>
          </View>
          <TouchableOpacity>
            <View style={[styles.navBtn, { paddingHorizontal: 54 }]}>
              <Text.Primary style={styles.bottomLabel}>{"Currently Scanning..."}</Text.Primary>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

ScanCameraScreen.navigationOptions = navigationOptions();

export default ScanCameraScreen;
