import { Stack } from "expo-router";
import {LogBox} from 'react-native'

LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  return (
    <Stack>
      
      <Stack.Screen 
      name="+not-found" 
      options={{
        headerTitle: "page not found",
        headerShown: false
      }} />
      <Stack.Screen 
      name="profile" 
      options={{
        headerTitle: "profile page",
        headerShown: false
      }} />
    </Stack>
  )
}
