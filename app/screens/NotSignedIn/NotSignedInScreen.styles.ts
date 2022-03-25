import { StyleSheet, Dimensions, Platform } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Layout, Font, Colors } from "style";

export default StyleSheet.create({
  container: {
    ...Layout.containerWithGradient,
    backgroundColor: Colors.black,
  },
  wholeScreen: {
    backgroundColor: Colors.black,
    height: "100%",
  },
  banner: {
    height: hp("52%"),
    position: "relative",
  },
  gradient: {
    position: "absolute",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.52,
  },
  logoContainer: {
    position: "absolute",
    top: 80,
    width: "100%",
  },
  logo: {
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
  },
  image: {
    height: Dimensions.get("window").height * 0.52,
  },
  bottomSection: {
    backgroundColor: Colors.black,
    paddingHorizontal: 30,
    marginTop: 30,
    position: "relative",
    height: Dimensions.get("window").height * 0.48,
  },
  ExtremBig: {
    color: Colors.white,
    fontSize: hp("5%"),
    lineHeight: hp("5%"),
    letterSpacing: 1,
    fontFamily: Font.FontFamily.EurostileBold,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 30,
  },
  description: {
    color: Colors.grey,
    fontSize: 14,
    lineHeight: 25,
    letterSpacing: 1,
    fontFamily: Font.FontFamily.SpaceGrotesk,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 50,
  },
  button: {
    height: 50,
    width: "100%",
    borderRadius: Platform.OS == "ios" ? 25 : 50,
  },
  buttonText: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: Font.FontFamily.EurostileBold,
    letterSpacing: 0.15,
  },
  linearbutton: {
    paddingHorizontal: 18,
    paddingVertical: 13,
    borderWidth: 2,
    borderRadius: Platform.OS == "ios" ? 25 : 45,
    borderColor: "#E9267B4D",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  buttonLeftPart: {
    display: "flex",
    flexDirection: "row",
  },
  buttonRightPart: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
});
