import { StyleSheet, Dimensions, Platform } from "react-native";
import { vw, vh } from "react-native-css-vh-vw";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { Layout, Font, Colors } from "style";

export default StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 25,
    backgroundColor: Colors.blackBack,
  },
  header: {
    marginTop: hp("10%"),
    display: "flex",
    paddingHorizontal: 25,
    paddingBottom: 14,
    borderBottomColor: Colors.white,
    borderBottomWidth: 1,
  },
  goBackContainer: {
    width: 40,
    height: 40,
    borderColor: Colors.white,
    borderWidth: 1,
    borderRadius: 20,
    display: "flex",
    alignContent: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0.15,
    textAlign: "center",
    alignSelf: "center",
    position: "absolute",
    justifyContent: "center",
    color: Colors.white,
    textAlignVertical: "center",
    marginTop: 10,
  },
  wholeScreen: {
    height: "100%",
    backgroundColor: "#161820",
    paddingBottom: hp("2%"),
  },
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 28,
  },
  titleLabel: {
    fontFamily: Font.FontFamily.EurostileBold,
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0.15,
    color: Colors.white,
  },
  itemCount: {
    fontFamily: Font.FontFamily.SpaceGrotesk,
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0.8,
    color: Colors.grey,
  },
  qrContainer: {
    backgroundColor: "#161820",
    borderRadius: 12,
    alignContent: "center",
    alignItems: "center",

    borderBottomColor: "#5F66744D",
    borderBottomWidth: 1,
  },
  qr: {
    width: vw(100) - 110,
    marginHorizontal: 30,
    resizeMode: "contain",
  },
  qrImg: {
    paddingVertical: 30,
  },
  qrScanner:{
    position:"absolute",
    width:"100%",
  },
  infoContainer: {
    alignContent: "center",
    alignItems: "center",
  },
  infoString: {
    fontSize: 12,
    paddingHorizontal: 64,
    textAlign: "center",
    marginTop: 13,
    marginBottom: 30,
    lineHeight: 16,
  },
  button: {
    height: 50,
    marginVertical: 30,
    marginHorizontal: 30,
  },
  buttonStyle1: {},
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
  bottomActionContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: vw(35),
    paddingHorizontal: 40,
  },
  navBtn: {
    paddingHorizontal: 23,
    borderWidth: 1,
    borderColor: "#242732",
    borderRadius: 37,
    backgroundColor: "#161820",
  },
  bottomLabel: {
    fontSize: 14,
    color: Colors.grey,
    letterSpacing: 0.15,
    marginVertical: 13,
    textAlign: "center",
  },
});
