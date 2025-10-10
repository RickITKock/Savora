import { Client } from "react-native-appwrite";

let client: Client;

client = new Client();
client
  .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT ?? "")
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID ?? "")
  .setPlatform(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_NAME ?? "");
