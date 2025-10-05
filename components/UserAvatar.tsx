// components/UserAvatar.tsx
import React from "react";
import { Avatar } from "react-native-paper";

type Props = {
  name?: string; // used to derive initials fallback
  uri?: string; // remote/local image source
  size?: number; // avatar size in px
  style?: object; // additional styles
};

export default function UserAvatar({
  name = "John Doe",
  uri,
  size = 72,
  style,
}: Props) {
  if (uri) {
    return <Avatar.Image style={style} size={size} source={{ uri }} />;
  }
  const initials = name
    .trim()
    .split(/\s+/)
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return <Avatar.Text size={size} label={initials} />;
}
