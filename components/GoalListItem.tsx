import EvilIcons from "@expo/vector-icons/EvilIcons";
import React, { useContext } from "react";
import {
  Image,
  type ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Card, Text } from "react-native-paper";
import { Context as GoalContext } from "../app/context/GoalContext";

type Props = {
  id: string;
  title: string;
  subtitle?: string;
  imageSource?: ImageSourcePropType;
  onPress?: () => void;
  style?: object;
};

export default function GoalListItem({
  id,
  title,
  subtitle,
  imageSource,
  style,
}: Props) {
  const { deleteGoal } = useContext(GoalContext);

  return (
    <Card mode="contained" style={[styles.card, style]}>
      <Card.Content>
        <Image source={imageSource} />
        <Text variant="titleLarge">{title}</Text>
        <Text>{subtitle}</Text>
      </Card.Content>
      <Card.Actions>
        <TouchableOpacity onPress={() => deleteGoal(id)}>
          <EvilIcons name="trash" style={styles.icon} />
        </TouchableOpacity>
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  icon: {
    fontSize: 24,
  },
});
