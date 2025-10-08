import FontAwesome from "@expo/vector-icons/FontAwesome";
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
  onTermSubmit: (e: TextInputEndEditingEvent) => void;
}) => {
  return (
    <View style={[styles.searchBarBackground, style]}>
      <FontAwesome name="search" style={styles.iconStyle} color="black" />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        onEndEditing={(e) => onTermSubmit(e)}
      />
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
