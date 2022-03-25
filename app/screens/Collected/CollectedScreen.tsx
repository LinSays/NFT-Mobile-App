import * as React from "react";
import { ScrollView, View, TouchableOpacity, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import { Text, Icon } from "components";
import { navigate } from "navigation";
import { NavStatelessComponent } from "interfaces";
import { Colors } from "style";

import styles from "./CollectedScreen.styles";
import navigationOptions from "./CollectedScreen.navigationOptions";
import imagesPath from "../../constant/imagePath";

const CollectedScreen: NavStatelessComponent = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const navigator = navigate(navigation);

  const { params } = route;
  const { collected } = params;

  return (
    <View style={styles.container}>
      {/* Header */}
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
      <ScrollView style={styles.wholeScreen}>
        {/* container */}
        <View style={styles.title}>
          <Text.Primary style={styles.titleLabel}>{"Collected"}</Text.Primary>
          <Text.Primary style={styles.itemCount}>{"1 Items"}</Text.Primary>
        </View>
        {/* sub-container */}
        <>
          <LinearGradient
            colors={["#FA2828FF", "#FA282800"]}
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 0.0, y: 0.5 }}
            style={styles.linearBorder}
          ></LinearGradient>
          <View style={styles.qrContainer}>
            <View style={styles.qrImg}>
              <Image source={imagesPath[collected.pictureKey]} style={styles.qr} />
              <View style={styles.itemLabel}>
                <Text.Secondary style={styles.itemLabelString}>{"NEW"}</Text.Secondary>
              </View>
            </View>
            <View style={styles.infoContainer}>
              <Text.Secondary style={styles.itemTitle}>{collected.title}</Text.Secondary>
              <Text.Secondary style={styles.infoString}>{collected.content}</Text.Secondary>
              <Text.Secondary style={styles.itemSubtitle}>{"ITEM 01"}</Text.Secondary>
              <View style={styles.circleImg}>
                <Image
                  source={imagesPath["yy3"]}
                  style={{ width: 64, height: 64, marginHorizontal: 7, marginTop: 6 }}
                />
              </View>
              <LinearGradient
                colors={[collected.logoColors[0], collected.logoColors[1]]}
                start={{ x: 0.0, y: 1.0 }}
                end={{ x: 0.0, y: 0.0 }}
                style={styles.linearCircle}
              ></LinearGradient>
            </View>
          </View>
        </>
        <View style={styles.bottomActionContainer}>
          <TouchableOpacity onPress={() => console.log("To be implemented")}>
            <View style={styles.navBtn}>
              <Icon fill="none" width="24" height="24" name={"ArrowLeft"} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button]} onPress={() => navigator.navigateScanQR()}>
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
                  {"Scan New"}
                </Text.Primary>
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("To be implemented")}>
            <View style={styles.navBtn}>
              <Icon fill="none" width="24" height="24" name={"ArrowRight"} />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* end container */}
    </View>
  );
};

CollectedScreen.navigationOptions = navigationOptions();

export default CollectedScreen;
