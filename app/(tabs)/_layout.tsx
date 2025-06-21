import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Ionicons} from '@expo/vector-icons'

export default function TabsLayout() {
  return (
   <Tabs
  screenOptions={{
    tabBarActiveTintColor: '#212121',
    // headerStyle: {
    //   backgroundColor: '#ffff',
    // },
    headerShadowVisible: false,
    headerTintColor: '#fff',
    tabBarStyle: {
      backgroundColor: '#fff',
    },
  }}
>

      <Tabs.Screen name="index" options={{ 
        headerShown: false,
        tabBarIcon:({focused, color})=> 
            <Ionicons 
                name={focused? "home" :"home-outline"} 
                size={24} 
                color="blue" />
       }} />
      <Tabs.Screen name="about" options={{ 
         headerShown: false
       }} />
      <Tabs.Screen name="pharmacy" options={{}} />
    </Tabs>
  )
}
