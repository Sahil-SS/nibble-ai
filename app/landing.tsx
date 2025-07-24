import Colors from "@/services/Colors";
import { Marquee } from "@animatereactnative/marquee";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Landing() {
  const router = useRouter();

  const imageList = [
    require("./../assets/images/1.jpg"),
    require("./../assets/images/2.jpg"),
    require("./../assets/images/3.jpg"),
    require("./../assets/images/4.jpg"),
    require("./../assets/images/5.jpg"),
    require("./../assets/images/6.jpg"),
  ];

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.BACKGROUND,
          paddingTop: StatusBar.currentHeight || 20,
          paddingHorizontal: 16,
        }}
      >
        {/* Marquee Row 1 */}
        <View style={{ height: 180, overflow: "hidden" }}>
          <Marquee
            spacing={10}
            speed={0.9}
            style={{ transform: [{ rotate: "-5deg" }] }}
          >
            <View style={{ flexDirection: "row", gap: 14 }}>
              {imageList.map((image, index) => (
                <Image
                  source={image}
                  key={`row1-img-${index}`}
                  style={{ width: 160, height: 160, borderRadius: 25 }}
                />
              ))}
            </View>
          </Marquee>
        </View>

        {/* Marquee Row 2 */}
        <View style={{ height: 180, overflow: "hidden", marginTop: 12 }}>
          <Marquee
            spacing={10}
            speed={0.7}
            style={{ transform: [{ rotate: "-5deg" }] }}
          >
            <View style={{ flexDirection: "row", gap: 14 }}>
              {imageList.map((image, index) => (
                <Image
                  source={image}
                  key={`row2-img-${index}`}
                  style={{ width: 160, height: 160, borderRadius: 25 }}
                />
              ))}
            </View>
          </Marquee>
        </View>

        {/* Marquee Row 3 */}
        <View style={{ height: 180, overflow: "hidden", marginTop: 12 }}>
          <Marquee
            spacing={10}
            speed={0.5}
            style={{ transform: [{ rotate: "-5deg" }] }}
          >
            <View style={{ flexDirection: "row", gap: 14 }}>
              {imageList.map((image, index) => (
                <Image
                  source={image}
                  key={`row3-img-${index}`}
                  style={{ width: 160, height: 160, borderRadius: 25 }}
                />
              ))}
            </View>
          </Marquee>
        </View>

        {/* Welcome Text */}
        <View style={{ marginTop: 20, zIndex: 10 }}>
          <Text
            style={{
              fontFamily: "orbitronBold",
              fontSize: 30,
              color: Colors.PRIMARY,
              textAlign: "center",
              textShadowRadius: 6,
            }}
          >
            Nibble 🍽️ — Smart Recipes. Made Simple
          </Text>

          <Text
            style={{
              fontFamily: "Inter",
              fontSize: 17,
              color: Colors.TEXT_MUTED,
              textAlign: "center",
              marginTop: 10,
              lineHeight: 18,
              letterSpacing: 0.3,
            }}
          >
            Your smart kitchen companion — generating recipes with the power of
            AI.
          </Text>
        </View>

        {/* Get Started Button */}
        <TouchableOpacity
          style={{
            marginTop: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => router.push("/(tabs)/Home")}
        >
          <Text
            style={{
              backgroundColor: Colors.PRIMARY,
              paddingVertical: 14,
              paddingHorizontal: 30,
              borderRadius: 15,
              textAlign: "center",
              fontSize: 18,
              fontFamily: "interBold",
              color: Colors.BACKGROUND,
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>

        {/* Footer */}
        <View
          style={{ marginTop: 30, paddingHorizontal: 20, marginBottom: 10 }}
        >
          <Text
            style={{
              fontFamily: "Inter",
              fontSize: 14,
              color: Colors.TEXT_MUTED,
              textAlign: "center",
              lineHeight: 16,
              letterSpacing: 0.2,
            }}
          >
            © 2025 Nibble. All rights reserved.
            {"\n"}Made with ❤️ by the Nibble Team
          </Text>
        </View>
      </View>
    </GestureHandlerRootView>
  );
}
