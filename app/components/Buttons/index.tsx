import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";

import { Font, Colors } from "style";

import RightIcon from "../RightIcon";
import Icon from "../Icon";

const Buttons = ({ setCurrentSlide, goToCollected }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-evenly",
      paddingHorizontal: 25,
      marginVertical: 30,
    }}
  >
    <View style={styles.leftBtnContainer}>
      <TouchableOpacity
        onPress={() =>
          setCurrentSlide((currentSlide) => (currentSlide == 0 ? 0 : Math.abs(currentSlide - 1)))
        }
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <AntDesign name="arrowleft" style={{ alignSelf: "center" }} color={"#000"} size={24} />
      </TouchableOpacity>
    </View>
    <TouchableOpacity onPress={() => goToCollected()}>
      <LinearGradient
        // Button Linear Gradient
        colors={["#15DEF9", "#7915F9"]}
        start={{ x: 1.0, y: 0.0 }}
        end={{ x: 0.0, y: 0.0 }}
        style={styles.button}
      >
        <Text style={styles.text}>Choose</Text>
      </LinearGradient>
    </TouchableOpacity>
    <View style={styles.rightBtnContainer}>
      <TouchableOpacity
        onPress={() =>
          setCurrentSlide((currentSlide) => (currentSlide > 1 ? currentSlide : currentSlide + 1))
        }
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <AntDesign name="arrowright" style={{ alignSelf: "center" }} color={"#000"} size={24} />
      </TouchableOpacity>
    </View>
  </View>
);

export default Buttons;

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: 157,
    height: 50,
    textAlignVertical: "center",
    justifyContent: "center",
    borderRadius: Platform.OS == "ios" ? 25 : 20,
  },
  text: { color: "#fff", textAlign: "center", fontFamily: Font.FontFamily.EurostileBold },
  leftBtnContainer: {
    width: 70,
    height: 50,
    borderWidth: 2,
    borderRadius: 45,
    borderColor: "#D9D9D9",
    backgroundColor: "white",
  },
  rightBtnContainer: {
    width: 70,
    height: 50,
    borderWidth: 2,
    borderRadius: 45,
    borderColor: "#D9D9D9",
    backgroundColor: "white",
  },
});
