import Colors from "@/services/Colors";
import React from "react";
import { FlatList, Text, View } from "react-native";

export default function Ingredients({ ingredients }: any) {
  return (
    <View
      style={{
        marginTop: 15,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "interBold",
            color: Colors.TEXT_MAIN,
            fontSize: 20,
          }}
        >
          Ingredients
        </Text>
        <Text
          style={{
            fontFamily: "interBold",
            color: Colors.TEXT_MAIN,
            fontSize: 12,
          }}
        >
          {ingredients?.length} items
        </Text>
      </View>
      <FlatList
        data={ingredients}
        renderItem={({ item, index }) => (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 7,
                padding: 7,
              }}
            >
              <Text
                style={{
                  fontSize: 23,
                  padding: 5,
                  backgroundColor: Colors.SURFACE,
                  borderRadius: 99,
                }}
              >
                {item?.icon}
              </Text>

              <Text
                style={{
                  fontSize: 18,
                  color: Colors.TEXT_MAIN,
                  fontFamily: "interRegular",
                }}
              >
                {item?.ingredient}
              </Text>
            </View>

            <Text
              style={{
                fontSize: 18,
                color: Colors.TEXT_MUTED,
                fontFamily: "interRegular",
              }}
            >
              {item?.quantity}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
