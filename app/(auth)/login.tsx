import UserAvatar from "@/components/UserAvatar";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import { useMemo, useState } from "react";
import {
  Alert,
  Dimensions,
  Modal,
  Pressable,
  Text as RNText,
  StyleSheet,
  View,
} from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const CODE_LENGTH = 5;

const TEST_CODE = "12345";

export default function Index() {
  const [code, setCode] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const { width } = Dimensions.get("window");
  const H_PADDING = 24;
  const GAP = 12;
  const keySize = useMemo(() => {
    // 3 columns → 2 gaps between keys
    const size = (width - H_PADDING * 2 - GAP * 2) / 3;
    return Math.min(size, 96);
  }, [width]);

  const handleKey = (val: string) => {
    if (val === "back") {
      setCode((c) => c.slice(0, -1));
      return;
    }
    console.log(code);

    if (code.length < CODE_LENGTH) setCode((c) => c + val);

    // VALIDATE CODE
    if (code.length === CODE_LENGTH - 1) {
      const fullCode = code + val;
      if (fullCode === TEST_CODE) {
        console.log("SUCCESS");
        router.replace("/(tabs)");
      } else {
        console.log("FAIL");
        setCode("");
        setModalVisible(true);
      }
    }
  };

  return (
    <SafeAreaView
      style={styles.safe}
      edges={["top", "left", "right", "bottom"]}
    >
      <Modal
        backdropColor={"rgba(0,0,0,0.3)"}
        animationType="fade"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text variant="titleMedium">Error</Text>
            <Text style={styles.modalText}>
              You have provided an invalid combination of identification code.
              Please check your details again. You are allowed three attempts
              in total.
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Welcome Text */}
      <Text style={styles.title} variant="headlineMedium">
        Welcome
      </Text>

      {/* Avatar */}
      <View style={styles.avatar}>
        <UserAvatar />
      </View>

      {/* Header area */}
      <View style={styles.header}>
        <Text variant="headlineSmall">Enter your 5-digit code</Text>
        <Text variant="bodyMedium">For now this is layout-only.</Text>
      </View>

      {/* Code display */}
      <View style={styles.codeRow}>
        {Array.from({ length: CODE_LENGTH }).map((_, i) => {
          const char = code[i];
          return (
            <View
              key={i}
              style={[styles.codeBox, code.length > i && styles.codeBoxFilled]}
            >
              <RNText style={[styles.codeText, char && styles.codeTextFilled]}>
                {char ? char : "•"}
              </RNText>
            </View>
          );
        })}
      </View>

      {/* Keypad */}
      <View style={[styles.keypadWrap, { paddingHorizontal: H_PADDING }]}>
        <KeyRow>
          <Key label="1" size={keySize} onPress={() => handleKey("1")} />
          <Key label="2" size={keySize} onPress={() => handleKey("2")} />
          <Key label="3" size={keySize} onPress={() => handleKey("3")} />
        </KeyRow>
        <KeyRow>
          <Key label="4" size={keySize} onPress={() => handleKey("4")} />
          <Key label="5" size={keySize} onPress={() => handleKey("5")} />
          <Key label="6" size={keySize} onPress={() => handleKey("6")} />
        </KeyRow>
        <KeyRow>
          <Key label="7" size={keySize} onPress={() => handleKey("7")} />
          <Key label="8" size={keySize} onPress={() => handleKey("8")} />
          <Key label="9" size={keySize} onPress={() => handleKey("9")} />
        </KeyRow>
        <KeyRow>
          {/* left placeholder (biometrics later) */}
          <View style={{ width: keySize, height: keySize }} />
          <Key label="0" size={keySize} onPress={() => handleKey("0")} />
          <Key
            icon={<MaterialIcons name="backspace" size={24} color="#0f172a" />}
            size={keySize}
            onPress={() => handleKey("back")}
          />
        </KeyRow>
      </View>
    </SafeAreaView>
  );
}

function KeyRow({ children }: { children: React.ReactNode }) {
  return <View style={styles.keyRow}>{children}</View>;
}

function Key({
  label,
  icon,
  size,
  onPress,
}: {
  label?: string;
  icon?: React.ReactNode;
  size: number;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.key,
        {
          width: size,
          height: size,
          opacity: pressed ? 0.6 : 1,
          borderRadius: size / 2,
        },
      ]}
      android_ripple={{ color: "rgba(0,0,0,0.08)", radius: size / 2 }}
    >
      {icon ? icon : <RNText style={styles.keyLabel}>{label}</RNText>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "space-around",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 40,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 100,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  avatar: {
    alignItems: "center",
  },
  header: {
    paddingTop: 24,
    paddingHorizontal: 24,
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    color: "#0f172a",
    marginBottom: 6,
  },
  subtitle: {
    textAlign: "center",
    color: "#475569",
  },

  codeRow: {
    // marginTop: 28,
    marginVertical: 12,
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
  },
  codeBox: {
    width: 52,
    height: 56,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8fafc",
  },
  codeBoxFilled: {
    borderColor: "#cbd5e1",
    backgroundColor: "#eef2ff",
  },
  codeText: {
    fontSize: 24,
    color: "#94a3b8",
    fontWeight: "600",
  },
  codeTextFilled: {
    color: "#1f2937",
  },

  keypadWrap: {
    paddingBottom: 24, // safe for home indicator
    gap: 12,
  },
  keyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
    marginBottom: 12,
  },
  key: {
    backgroundColor: "#f1f5f9",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  keyLabel: {
    fontSize: 24,
    fontWeight: "700",
    color: "#0f172a",
  },
});

// const styles = StyleSheet.create({
//   safe: { flex: 1, alignItems: "center", justifyContent: "center" },
//   navButton: {
//     marginTop: 20,
//     fontSize: 18,
//     color: "blue",
//     backgroundColor: "lightblue",
//     padding: 10,
//   },
// });
