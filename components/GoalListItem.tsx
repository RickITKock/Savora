import React from "react";
import { StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

type Props = {
  title: string;
  subtitle?: string;
  onPress?: () => void;
  style?: object;
};

export default function GoalListItem({
  title,
  subtitle,
  onPress,
  style,
}: Props) {
  return (
    <Card mode="contained" style={styles.card}>
      <Card.Content>
        <Text variant="titleLarge">{title}</Text>
        <Text>{subtitle}</Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { margin: 16, backgroundColor: "white" },
});
