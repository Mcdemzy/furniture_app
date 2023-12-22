import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from "../../constants";

const Carousel = () => {
  const slides = [
    "https://media.istockphoto.com/id/1350859272/photo/luxury-furniture-goods.jpg?s=612x612&w=0&k=20&c=XOqf7YV73QzWE2civf53imMOqh96-dtf6okicqszRWQ=",
    "https://media.istockphoto.com/id/1336663470/photo/a-luxury-showroom.jpg?s=612x612&w=0&k=20&c=-0ah1zuXYdtRdIfwgYIy7LxFXb8DN3NrAx-Mao5EVt4=",

    "https://media.istockphoto.com/id/628401066/photo/interior-of-a-hotel-lobby.jpg?s=612x612&w=0&k=20&c=D7ujVsm1rt70Zxeyoev0Zfn2XqqSEFqmnhmwo36xJ7c=",
    "https://media.istockphoto.com/id/1539085930/photo/side-view-of-lobby-or-coworking-area-with-aisle-dividing-two-parts-of-openspace.jpg?s=612x612&w=0&k=20&c=yCcaaUp2JyBbGXBAifstoSSHRTfRrD--xlfErWKFun8=",
    "https://media.istockphoto.com/id/1068259310/photo/interior-of-a-modern-hotel-lobby.jpg?s=612x612&w=0&k=20&c=1ry5_TmsqWe883CEp0PHaSsFTrXtEY9OnOfYcq6p3RE=",
  ];
  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{
          borderRadius: 15,
          width: "93%",
          marginTop: 15,
        }}
        autoplay
        circleLoop
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: "center",
  },
});
