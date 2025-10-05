import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ImageBackground, Pressable, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

type Props = {
  title: string;
  subtitle?: string;
  imageUri: string; // or change to "number" if you prefer require(...)
  onPress?: () => void;
  style?: object;
};

export default function ImageSummaryCard({
  title,
  subtitle,
  imageUri,
  onPress,
  style,
}: Props) {
  return (
    <Pressable onPress={onPress} style={[styles.shadow, style]}>
      <ImageBackground
        source={{ uri: imageUri }}
        style={styles.bg}
        imageStyle={styles.bgImage}
        resizeMode="cover"
      >
        {/* subtle dark gradient so text is readable */}
        <LinearGradient
          colors={["rgba(0,0,0,0.1)", "rgba(0,0,0,0.55)"]}
          style={StyleSheet.absoluteFill}
        />
        <View style={styles.textWrap}>
          <Text variant="titleLarge" style={styles.title}>
            {title}
          </Text>
          {subtitle ? (
            <Text variant="bodyMedium" style={styles.subtitle}>
              {subtitle}
            </Text>
          ) : null}
        </View>
      </ImageBackground>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  shadow: {
    borderRadius: 18,
    overflow: "hidden",
    elevation: 6, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },
  bg: {
    width: "100%",
    aspectRatio: 16 / 9, // nice responsive height
    justifyContent: "flex-end",
  },
  bgImage: { borderRadius: 18 },
  textWrap: { padding: 16 },
  title: { color: "#fff", fontWeight: "700" },
  subtitle: { color: "rgba(255,255,255,0.92)", marginTop: 4 },
});
