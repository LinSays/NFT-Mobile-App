import { StyleSheet, Dimensions } from "react-native";

import { Layout, Font, Colors } from "style";

const { height } = Dimensions.get("window");
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FA2884",
    minHeight: height + 70,
  },
  separator: {
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    padding: 0,
  },
  backArrow: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "rgba(255, 255, 255, 0.5)",
    padding: 10,
    width: 40,
    height: 40,
  },
  header: {
    marginTop: 60,
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
    fontFamily: Font.FontFamily.EurostileBold,
  },
});
