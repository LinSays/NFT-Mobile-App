import { StyleSheet } from "react-native";

import { Font, Colors } from "style";

export default StyleSheet.create({
  default: {
    color: Colors.grey,
    fontFamily: Font.FontFamily.SpaceGrotesk,
    fontSize: Font.FontSize.Primary,
    lineHeight: Font.FontLineHeight.Secondary,
    fontWeight: "500",
  },
});
