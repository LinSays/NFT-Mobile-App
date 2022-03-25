import React, { useState } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import { Text, Icon, LoginModal } from "components";
import { navigate } from "navigation";
import { NavStatelessComponent } from "interfaces";
import { Colors } from "style";

import styles from "./NotSignedInScreen.styles";
import navigationOptions from "./NotSignedInScreen.navigationOptions";
import imagesPath from "../../constant/imagePath";

const NotSignedInScreen: NavStatelessComponent = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.wholeScreen}>
      <View style={styles.banner}>
        <Image source={imagesPath["gifBanner"]} style={styles.image} />
        <Image source={imagesPath["blackGradient"]} style={styles.gradient} />
        <TouchableOpacity onPress={() => navigator.navigateLogin()} style={styles.logoContainer}>
          <Image source={imagesPath["logo"]} style={styles.logo} />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomSection}>
        <Text.Primary style={styles.ExtremBig}>{"Claim your Reward"}</Text.Primary>
        <Text.Primary style={styles.description}>
          {"In order to claim your reward you'll need to scan QR which you've recived first"}
        </Text.Primary>
        <TouchableOpacity
          style={[styles.button, { marginBottom: 16 }]}
          onPress={() => navigator.openScanQR()}
        >
          <LinearGradient
            colors={[Colors.gradientRed1, Colors.gradientRed2]}
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 1.0, y: 0.0 }}
            style={styles.linearbutton}
          >
            <View style={styles.buttonLeftPart}>
              <Icon fill="none" width="20" height="20" name={"Scan"} style={{ marginRight: 13 }} />
              <Text.Primary style={[styles.buttonText, { color: Colors.white }]}>
                {"Scan Code"}
              </Text.Primary>
            </View>
            <View style={styles.buttonRightPart}>
              <Icon fill="none" width="59" height="12" name={"Arrow"} style={{ marginRight: 13 }} />
            </View>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setIsVisible(true)}>
          <LinearGradient
            colors={[Colors.white, Colors.white]}
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 1.0, y: 0.0 }}
            style={[styles.linearbutton, { borderColor: "#00000026" }]}
          >
            <View style={styles.buttonLeftPart}>
              <Icon
                fill="none"
                width="20"
                height="20"
                name={"Logout"}
                style={{ marginRight: 13 }}
              />
              <Text.Primary style={[styles.buttonText, { color: Colors.black }]}>
                {"Enter Community"}
              </Text.Primary>
            </View>
            <View style={styles.buttonRightPart}>
              <Icon
                fill="none"
                width="59"
                height="12"
                name={"ArrowBlack"}
                style={{ marginRight: 13 }}
              />
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <LoginModal setIsVisible={setIsVisible} isVisible={isVisible} />
    </View>
  );
};

NotSignedInScreen.navigationOptions = navigationOptions();

export default NotSignedInScreen;
