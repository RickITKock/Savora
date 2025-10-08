import React from "react";
import { Image, type ImageSourcePropType, StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

type Props = {
  title: string;
  subtitle?: string;
  imageSource?: ImageSourcePropType;
  onPress?: () => void;
  style?: object;
};

export default function GoalListItem({
  title,
  subtitle,
  imageSource,
  style,
}: Props) {
  return (
    <Card mode="contained" style={[styles.card, style]}>
      <Card.Content>
        <Image source={imageSource} />
        <Text variant="titleLarge">{title}</Text>
        <Text>{subtitle}</Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
});
