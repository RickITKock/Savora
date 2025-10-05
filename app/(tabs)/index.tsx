// Example inside app/(tabs)/index.tsx
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={["#2ecc71", "#27ae60"]} style={styles.header}>
        <SafeAreaView edges={["top"]}>
          <Text variant="titleLarge" style={styles.greetingText}>Good morning,</Text>
          <Text variant="titleLarge" style={styles.nameText}>John!</Text>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 300,
    justifyContent: "center",
  },
  greetingText: { color: "#fff", fontWeight: "300", width: '100%', textAlign: 'center' },
  nameText: { color: "#fff", fontWeight: "700", width: '100%', textAlign: 'center' },
});
