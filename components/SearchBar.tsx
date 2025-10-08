import FontAwesome from "@expo/vector-icons/FontAwesome";
import { type StyleProp, StyleSheet, TextInput, View } from "react-native";
import type { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

export const SearchBar = ({ style }: { style?: StyleProp<ViewStyle> }) => {
  return (
    <View style={[styles.searchBarBackground, style]}>
      <FontAwesome name="search" style={styles.iconStyle} color="black" />
      <TextInput style={styles.inputStyle} placeholder="Search" />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarBackground: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});
