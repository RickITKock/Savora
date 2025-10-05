// Example inside app/(tabs)/index.tsx
import ImageSummaryCard from "@/components/ImageSummaryCard";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
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
    </View>
  );
}

const styles = StyleSheet.create({
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
