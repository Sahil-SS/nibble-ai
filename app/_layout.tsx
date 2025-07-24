import Colors from "@/services/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    orbitronBold: require("./../assets/fonts/Orbitron-Bold.ttf"),
    interBold: require("./../assets/fonts/Inter_18pt-Bold.ttf"),
    interRegular: require("./../assets/fonts/Inter_24pt-Regular.ttf"),
  });
  return (
    <Stack>
      <Stack.Screen name="landing" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="recipe-detail/index"
        options={{
          title: "Recipe Detail",
          headerTintColor: Colors.TEXT_MAIN, // color of back button and title
          headerStyle: {
            backgroundColor: Colors.BACKGROUND, // your app's dark background
          },
          headerTitleStyle: {
            fontFamily: "interBold",
            fontSize: 18,
          },
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 16 }}
              onPress={() => {
                console.log("Icon tapped");
              }}
            >
              <Ionicons
                name="heart-outline"
                size={24}
                color={Colors.TEXT_MAIN}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
}
