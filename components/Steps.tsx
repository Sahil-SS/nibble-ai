import Colors from "@/services/Colors";
import React from "react";
import { FlatList, Text, View } from "react-native";
import CreateRecipe from "./CreateRecipe";

export default function Steps({ steps }: any) {
  return (
    <View
      style={{
        marginTop: 15,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontFamily: "interBold",
          color: Colors.TEXT_MAIN,
        }}
      >
        Steps
      </Text>

      <FlatList
        data={steps}
        renderItem={({ item, index }) => (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 7,
              alignItems: "center",
              marginTop: 10,
              padding: 10,
              borderRadius: 15,
              borderWidth: 0.3,
            }}
          >
            <Text
              style={{
                fontFamily: "interBold",
                color: Colors.TEXT_MUTED,
                fontSize: 12,
                padding: 18,
                width: 40,
                textAlign: "center",
                backgroundColor: Colors.SURFACE,
                borderRadius: 7,
              }}
            >
              {index + 1}
            </Text>
            <Text
              style={{
                fontFamily: "interRegular",
                color: Colors.TEXT_MUTED,
                fontSize: 18,
                flex: 1,
              }}
            >
              {item}
            </Text>
          </View>
        )}
      />

      <CreateRecipe />
    </View>
  );
}
