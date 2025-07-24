import Colors from "@/services/Colors";
import { Image } from "expo-image";
import React, { useState } from "react";
import { Switch, Text, View } from "react-native"; // <-- Use Switch from here, not gesture-handler

const IntroHeader = () => {
  const [isEnable, setIsEnable] = useState(false);

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5,
        paddingTop: 30,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={require("@/assets/images/user-icon.jpg")}
          style={{ width: 45, height: 45, borderRadius: 20, marginBottom: 10 }}
          contentFit="cover"
        />
        <Text
          style={{
            color: Colors.PRIMARY,
            fontSize: 30,
            marginBottom: 5,
            paddingLeft: 10,
            fontFamily: "interBold",
            textShadowColor: Colors.PRIMARY,
            textShadowOffset: { width: 0, height: 0 },
            textShadowRadius: 10,
          }}
        >
          Hello, User!
        </Text>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 30,
        }}
      >
        <Text
          style={{
            color: Colors.TEXT_MAIN,
            fontSize: 16,
            fontFamily: "interBold",
          }}
        >
          {isEnable ? "Non-Veg" : "Veg"}
        </Text>
        <Switch
          value={isEnable}
          onValueChange={() => setIsEnable(!isEnable)}
          trackColor={{
            false: "#555555",
            true: "#00FFAB",
          }}
          thumbColor={"#00FFAB"}
        />
      </View>
    </View>
  );
};

export default IntroHeader;
