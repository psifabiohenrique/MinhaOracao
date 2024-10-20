import MenuScreenManager from "@/hooks/MenuScreenManager";
import { Stack } from "expo-router";

export default function RootLayout() {

  let rosary = MenuScreenManager().rosary

  return (
    <Stack screenOptions={{headerShown: true}}>
      <Stack.Screen name="index" options={{title: "Minha Oração"}}/>
      <Stack.Screen name="ViewMenu" options={{title: "Rosário"}}/>
      <Stack.Screen name="ViewRosary/[id]" options={{title: "Santo Terço", headerShown: false}}/>
    </Stack>
  );
}
