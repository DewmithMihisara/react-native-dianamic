import { Stack } from "expo-router";


export type RootStackParamList = {
  index: undefined;
  chatScreen: { name: string };
};

export default function RootLayout() {
  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="index" />
      <Stack.Screen name="chatScreen" />
    </Stack>
  );
}
