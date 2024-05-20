import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
// import { AdMobBanner } from "expo-ads-admob";
import InlineAd from "./inLineAd";

export default function Layout(props) {

  return (
    <ImageBackground
      source={require('../assets/home-remedies.jpeg')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View>{props.children}</View>
        <View style={styles.banner}>
          <Text>Banner Ad</Text>
          <InlineAd/>
          {/* <AdMobBanner
            bannerSize="fullBanner"
            adUnitID="ca-app-pub-5705153435095931/7915855675"
            servePersonalizedAds // You can set this prop to `false` for non-personalized ads
          /> */}
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    margin: 25,
    justifyContent: "space-between",
  },
  banner: {
    backgroundColor: "#e0e0e0",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
});