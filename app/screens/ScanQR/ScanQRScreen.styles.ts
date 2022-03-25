import { StyleSheet, Dimensions, Platform } from "react-native";
import { vw, vh } from "react-native-css-vh-vw";

import { Layout, Font, Colors } from "style";

export default StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 25,
    backgroundColor: Colors.blackBack,
  },
  wholeScreen: {
    height: "100%",
    backgroundColor: Colors.blackBack,
  },
  header: {
    marginTop:40,
    paddingHorizontal: 25,
    height: 65,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#5F66744D",
    borderBottomWidth: 1,
  },
  logoContainer: {
    justifyContent: "center", //Centered vertically
    flex: 1,
  },
  hamburgerBtn: {
    marginTop: 10,
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
  },
  qr: {
    width: vw(100) - 110,
    marginHorizontal: 30,
    resizeMode: "contain",
  },
  qrImg: {
    paddingVertical: 30,
    borderBottomColor: "#5F66744D",
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  qrScanner: {
    position: "absolute",
    width: "100%",
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
    paddingTop: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  navBtn: {
    paddingVertical: 13,
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
  },
});
