import ImageSummaryCard from "@/components/ImageSummaryCard";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const HEADER_FADE_DISTANCE = 80;

import { BlurView } from "expo-blur";
const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

export default function Home() {
  const navigation = useNavigation();
  const scrollY = useRef(new Animated.Value(0)).current;
  const [darkHeader, setDarkHeader] = useState(false);

  useEffect(() => {
    const opacity = scrollY.interpolate({
      inputRange: [0, HEADER_FADE_DISTANCE],
      outputRange: [0, 1], // 0 → transparent, 1 → fully visible
      extrapolate: "clamp",
    });

    navigation.setOptions({
      headerTransparent: true,
      headerBackground: () => (
        <View style={StyleSheet.absoluteFill}>
          {/* Frosted glass blur */}
          <AnimatedBlurView
            tint="light" // 'light' | 'dark' | 'default'
            intensity={40} // blur strength (0–100)
            style={[StyleSheet.absoluteFill, { opacity }]}
          />
          {/* Subtle white wash over the blur for readability */}
          <Animated.View
            pointerEvents="none"
            style={[
              StyleSheet.absoluteFill,
              { backgroundColor: "rgba(255,255,255,0.9)", opacity },
            ]}
          />
        </View>
      ),
    });
  }, [navigation, scrollY]);

  useEffect(() => {
    const id = scrollY.addListener(({ value }) => {
      const shouldBeDark = value > HEADER_FADE_DISTANCE * 0.6;
      if (shouldBeDark !== darkHeader) {
        setDarkHeader(shouldBeDark);
        navigation.setOptions({
          headerTintColor: shouldBeDark ? "#111" : "#fff",
          headerTitleStyle: { color: shouldBeDark ? "#111" : "#fff" },
        });
      }
    });
    return () => scrollY.removeListener(id);
  }, [navigation, scrollY, darkHeader]);

  // (nice touch) switch status bar style too
  useEffect(() => {
    // This just forces a re-render so <StatusBar style=...> below updates
  }, [darkHeader]);

  return (
    <View style={styles.root}>
      <StatusBar style={darkHeader ? "dark" : "light"} animated />

      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        showsVerticalScrollIndicator={false}
      >
        <LinearGradient colors={["#2ecc71", "#27ae60"]} style={styles.header}>
          <SafeAreaView edges={["top"]}>
            <Text variant="titleLarge" style={styles.greetingText}>
              Good morning,
            </Text>
            <Text variant="titleLarge" style={styles.nameText}>
              John!
            </Text>
          </SafeAreaView>
        </LinearGradient>

        <ImageSummaryCard
          title="Your month at a glance"
          subtitle="Spending is trending lower than last month. Keep it up!"
          imageUri="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1200&auto=format&fit=crop"
          style={{ marginTop: -36, marginHorizontal: 16 }} // pulls it up over the green header
        />

        <ImageSummaryCard
          title="Your month at a glance"
          subtitle="Spending is trending lower than last month. Keep it up!"
          imageUri="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1200&auto=format&fit=crop"
          style={{ marginTop: 16, marginHorizontal: 16 }} // pulls it up over the green header
        />

        <ImageSummaryCard
          title="Your month at a glance"
          subtitle="Spending is trending lower than last month. Keep it up!"
          imageUri="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1200&auto=format&fit=crop"
          style={{ marginTop: 16, marginHorizontal: 16 }} // pulls it up over the green header
        />

        <ImageSummaryCard
          title="Your month at a glance"
          subtitle="Spending is trending lower than last month. Keep it up!"
          imageUri="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1200&auto=format&fit=crop"
          style={{ marginTop: 16, marginHorizontal: 16 }} // pulls it up over the green header
        />
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#f4f6f8" },
  header: {
    height: 300,
    justifyContent: "center",
  },
  greetingText: {
    color: "#fff",
    fontWeight: "300",
    width: "100%",
    textAlign: "center",
  },
  nameText: {
    color: "#fff",
    fontWeight: "700",
    width: "100%",
    textAlign: "center",
  },
});
