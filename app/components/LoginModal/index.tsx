import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text, TextInput } from "react-native";
import Modal from "react-native-modal";
import { LinearGradient } from "expo-linear-gradient";

import { Colors, Font } from "style";
import { Icon } from "components";

const LoginModal = ({ setIsVisible, isVisible }) => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <Modal isVisible={isVisible} style={styles.modal} onBackdropPress={() => setIsVisible(false)}>
      <View style={styles.modalContainer}>
        {/* Tabs */}
        <View style={styles.tabs}>
          <TouchableOpacity
            onPress={() => setCurrentTab(0)}
            style={[styles.tab, currentTab == 0 && styles.selectedTab]}
          >
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setCurrentTab(1)}
            style={[styles.tab, currentTab == 1 && styles.selectedTab]}
          >
            <Text style={styles.text}>Signup</Text>
          </TouchableOpacity>
        </View>
        {/* Inputs */}
        <View style={styles.inputsContainer}>
          <TextInput
            style={styles.input}
            placeholder="Your Email..."
            placeholderTextColor={"rgba(255, 255, 255, 0.5);"}
          />
          <TextInput
            style={styles.input}
            placeholder="Your Password..."
            placeholderTextColor={"rgba(255, 255, 255, 0.5);"}
          />
        </View>
        <View style={{ alignSelf: "center", marginBottom: 30 }}>
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
              <Text style={[styles.buttonText, { color: Colors.white }]}>{"Login"}</Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.signupText}>
            <Text style={{ color: "rgba(255, 255, 255, 0.5)" }}>You don't have an account?</Text>
            <Text style={styles.createAccountText}>Create Account</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LoginModal;

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
    height: 350,
  },
  text: { color: "white" },
  modalContainer: {
    height: 350,
    backgroundColor: "#111319",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tab: {
    flex: 0.5,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    height: 56,
  },
  selectedTab: {
    borderColor: "white",
    borderBottomWidth: 1,
  },
  inputsContainer: {
    flex: 1,
    flexDirection: "column",
    marginTop: 22,
    alignItems: "center",
  },
  input: {
    width: 335,
    height: 50,
    marginVertical: 8,
    backgroundColor: "#1C2028",
    borderRadius: 26,
    paddingHorizontal: 20,
  },
  signupText: {
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
  },
  createAccountText: {
    paddingLeft: 5,
    color: "white",
    textDecorationLine: "underline",
  },
  button: {
    height: 50,
    width: 335,
    borderRadius: Platform.OS == "ios" ? 25 : 50,
  },
  buttonText: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: Font.FontFamily.EurostileBold,
    letterSpacing: 0.15,
    textAlign: "center",
  },
  linearbutton: {
    paddingHorizontal: 18,
    paddingVertical: 13,
    borderWidth: 2,
    borderRadius: Platform.OS == "ios" ? 25 : 45,
    borderColor: "#E9267B4D",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
});
