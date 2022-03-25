import * as React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
  FontAwesome,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";

import { Text, Icon } from "components";
import { navigate } from "navigation";
import { NavStatelessComponent } from "interfaces";
import { Colors } from "style";

import Slide from "../../components/Slide";
import Buttons from "../../components/Buttons";
import LoginModal from "../../components/LoginModal";
import styles from "./SliderScreen.styles";
import navigationOptions from "./SliderScreen.navigationOptions";
import imagesPath from "../../constant/imagePath";

const { width } = Dimensions.get("window");
const slides = [
  {
    id: 1,
    pictureKey: "item1",
    logoColors: [Colors.gradientGreen1, Colors.gradientGreen2],
    title: "Kawaii",
    content: "In order to claim your reward you'll\n need to scan QR which you've received\n first",
    perk: "PERK 1",
  },
  {
    id: 2,
    pictureKey: "item2",
    logoColors: [Colors.gradientOrange1, Colors.gradientOrange2],
    title: "Sugoi",
    content: "In order to claim your reward you'll\n need to scan QR which you've received\n first",
    perk: "PERK 2",
  },
  {
    id: 3,
    pictureKey: "item3",
    logoColors: [Colors.gradientBlue1, Colors.gradientBlue2],
    title: "Oniisan",
    content: "In order to claim your reward you'll\n need to scan QR which you've received\n first",
    perk: "PERK 3",
  },
];

const SliderScreen: NavStatelessComponent = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const flatlistRef = React.useRef<FlatList>(null);
  React.useEffect(() => {
    flatlistRef.current?.scrollToOffset({
      offset: currentSlide * (width - 72),
      animated: true,
    });
  }, [currentSlide]);

  const snapToOffsetsLikeGooglePlay = slides.map((x, i) => {
    return i * width * 0.7 + 36;
  });

  // renderSlide function for FlatList, rendering <Slide/> component
  const renderSlide = ({ item, index }, currentSlide) => (
    <Slide data={item} index={index} currentSlide={currentSlide} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigator.navigateScanQR()}>
          <View style={styles.goBackContainer}>
            <AntDesign name="left" style={{ alignSelf: "center" }} color={Colors.white} size={14} />
          </View>
        </TouchableOpacity>
        <Text.Primary style={styles.headerTitle}>{"Choose Perk"}</Text.Primary>
      </View>
      <ScrollView>
        <FlatList
          ref={flatlistRef}
          data={slides}
          renderItem={(item) => renderSlide(item, currentSlide)}
          horizontal
          pagingEnabled
          decelerationRate={0}
          disableScrollViewPanResponder={true}
          scrollEnabled={false}
          snapToOffsets={snapToOffsetsLikeGooglePlay}
          showsHorizontalScrollIndicator={false}
          style={{ paddingHorizontal: 36 }}
          // onViewableItemsChanged={_onViewableItemsChanged}
        />

        <Buttons
          setCurrentSlide={setCurrentSlide}
          goToCollected={() => navigator.openCollected({ collected: slides[currentSlide] })}
        />

        <StatusBar style="light" />
      </ScrollView>
    </SafeAreaView>
  );
};

SliderScreen.navigationOptions = navigationOptions();

export default SliderScreen;
