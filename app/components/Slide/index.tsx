import React from "react";
import { StyleSheet, Dimensions, View, Image, Platform } from "react-native";
const { width, height } = Dimensions.get("window");
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Text from "../Text";
import imagesPath from "../../constant/imagePath";
import Colors from "../../style/colors/Colors";
import { Font } from "../../style/font/Font";

// Rebuild data array
// Write down data, with image paths (add them to imagesPath)
// Change images to right size
// Loop on data

const Slide = ({ data, index, currentSlide }) => (
  <View
    style={[
      styles.screenContainer,
      index == 2 && { marginRight: 96 },
      currentSlide != index && { height: height * 0.4, opacity: 0.5 },
    ]}
  >
    <View>
      {currentSlide == index && (
        <LinearGradient
          colors={["#FFFFFFFF", "#FFFFFF00"]}
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 0.0, y: 0.0 }}
          style={styles.linearBorder}
        ></LinearGradient>
      )}

      <View style={styles.qrContainer}>
        <View style={styles.qrImg}>
          <Image
            source={imagesPath[data.pictureKey]}
            style={[
              styles.qr,
              currentSlide != index && {
                height: 250,
                opacity: 0.5,
                justifyContent: "center",
                flexDirection: "column",
                display: "flex",
                marginTop: 20,
              },
            ]}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text.Secondary style={styles.itemTitle}>{data.title}</Text.Secondary>
          <Text.Secondary style={styles.infoString}>{data.content}</Text.Secondary>
          <Text.Secondary style={styles.itemSubtitle}>{data.perk}</Text.Secondary>
          <View style={styles.circleImg}>
            <Image
              source={imagesPath["yy3"]}
              style={{ width: 64, height: 64, marginHorizontal: 7, marginTop: 6 }}
            />
          </View>
          <LinearGradient
            colors={[data.logoColors[0], data.logoColors[1]]}
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 0.0, y: 0.0 }}
            style={styles.linearCircle}
          ></LinearGradient>
        </View>
      </View>
    </View>
  </View>
);
export default Slide;

const styles = StyleSheet.create({
  screenContainer: {
    // flex: 1,
    backgroundColor: Colors.transparent,
    alignItems: "center",
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    marginTop: hp("2%"),
    marginHorizontal: 12,
  },
  linearBorder: {
    position: "absolute",
    width: width - 94,
    height: hp("46.25%"),
    marginHorizontal: -1,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    top: 0,
  },
  qrContainer: {
    backgroundColor: Colors.transparent,
    borderRadius: 12,
    width: width - 96,
  },
  qr: {
    width: width - 96,
    height: hp("46%"),
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  qrImg: {},

  infoContainer: {
    alignContent: "center",
    alignItems: "center",
  },
  itemTitle: {
    fontSize: hp("5%"),
    fontFamily: Font.FontFamily.EurostileBold,
    lineHeight: hp("5%"),
    fontWeight: "700",
    letterSpacing: 1,
    color: Colors.white,
    marginTop: 47,
  },
  infoString: {
    // width: 220,
    fontSize: 12,
    textAlign: "center",
    marginTop: hp("1.5%"),
    lineHeight: hp("2%"),
    letterSpacing: 0.8,
    color: Colors.white,
    fontWeight: "700",
    fontFamily: Font.FontFamily.SpaceGrotesk,
  },
  itemSubtitle: {
    fontSize: 12,
    fontFamily: Font.FontFamily.SpaceGroteskBold,
    lineHeight: 17,
    letterSpacing: 3,
    marginTop: hp("3%"),
    color: Colors.white,
  },
  circleImg: {
    // width: 86,
    // height: 83,
    // borderWidth: 2,
    borderRadius: 73,
    // borderColor: Colors.white,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    top: -36,
  },
  linearCircle: {
    width: 86,
    height: 83,
    top: -40,
    position: "absolute",
    borderWidth: 2,
    borderRadius: Platform.OS == "ios" ? 43 : 73,
    borderColor: Colors.white,
  },
});
