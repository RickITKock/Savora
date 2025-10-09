import EvilIcons from "@expo/vector-icons/EvilIcons";
import {
  type StyleProp,
  StyleSheet,
  TextInput,
  type TextInputEndEditingEvent,
  View,
} from "react-native";
import type { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

export const SearchBar = ({
  style,
  term,
  onTermChange,
  onTermSubmit,
}: {
  style?: StyleProp<ViewStyle>;
  term: string;
  onTermChange: (text: string) => void;
  onTermSubmit?: (e: TextInputEndEditingEvent) => void;
}) => {
  return (
    <View style={[styles.searchBarBackground, style]}>
      <EvilIcons name="search" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        onEndEditing={(e) => onTermSubmit && onTermSubmit(e)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarBackground: {
    backgroundColor: "#ffffff",
    height: 50,
    borderRadius: 5,
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
    color: "gray",
  },
});
