import { Account, Client, TablesDB } from "react-native-appwrite";

const client = new Client();
client
  .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT ?? "")
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID ?? "")
  .setPlatform(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_NAME ?? "");

export const account = new Account(client);
export const tablesDB = new TablesDB(client);
