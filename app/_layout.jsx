import TripProvider from "@/contexts/TripContext";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <TripProvider>
        <Stack screenOptions={{
          headerShown:false
        }}>
          <Stack.Screen name="(tabs)" />
        </Stack>
      </TripProvider>
    </GestureHandlerRootView>
  );
}
