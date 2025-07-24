import Colors from "@/services/Colors";
import Entypo from "@expo/vector-icons/Entypo";
import React from "react";
import { Text, View } from "react-native";

export default function RecipeIntro({ recipe }: any) {
  return (
    <View>
      <Text
        style={{
          fontFamily: "interBold",
          fontSize: 25,
          color: Colors.PRIMARY,
          marginTop: 8,
          // padding:5
        }}
      >
        {recipe.recipeName}
      </Text>
      <Text
        style={{
          fontFamily: "interBold",
          color: Colors.TEXT_MAIN,
          fontSize: 20,
          marginTop: 7,
        }}
      >
        Description
      </Text>
      <Text
        style={{
          fontFamily: "Inter_24pt-Regular.ttf",
          color: Colors.TEXT_MUTED,
          // padding:5,
          fontSize: 15,
          marginTop: 3,
        }}
      >
        {recipe.description}
      </Text>

      <View
        style={{
          marginTop: 15,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 5,
        }}
      >
        {/* Calories */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            backgroundColor: Colors.SURFACE,
            padding: 12,
            borderRadius: 10,
            flex: 1,
            minWidth: 0,
          }}
        >
          <Entypo name="leaf" size={18} color={Colors.PRIMARY} />
          <View style={{ flex: 1 }}>
            <Text
              style={{
                color: Colors.PRIMARY,
                fontFamily: "interBold",
                fontSize: 13,
              }}
            >
              Calories
            </Text>
            <Text
              style={{
                color: Colors.TEXT_MAIN,
                fontSize: 13,
              }}
            >
              {recipe.calories} cal
            </Text>
          </View>
        </View>

        {/* Cooking Time */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            backgroundColor: Colors.SURFACE,
            padding: 12,
            borderRadius: 10,
            flex: 1,
            minWidth: 0,
          }}
        >
          <Entypo name="clock" size={18} color={Colors.PRIMARY} />
          <View style={{ flex: 1 }}>
            <Text
              style={{
                color: Colors.PRIMARY,
                fontFamily: "interBold",
                fontSize: 12,
              }}
            >
              Cook Time
            </Text>
            <Text
              style={{
                color: Colors.TEXT_MAIN,
                fontSize: 13,
              }}
            >
              {recipe.cookTime} mins
            </Text>
          </View>
        </View>

        {/* Serving Quantity */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            backgroundColor: Colors.SURFACE,
            padding: 12,
            borderRadius: 10,
            flex: 1,
            minWidth: 0,
          }}
        >
          <Entypo name="users" size={18} color={Colors.PRIMARY} />
          <View style={{ flex: 1 }}>
            <Text
              style={{
                color: Colors.PRIMARY,
                fontFamily: "interBold",
                fontSize: 13,
              }}
            >
              Servings
            </Text>
            <Text
              style={{
                color: Colors.TEXT_MAIN,
                fontSize: 13,
              }}
            >
              {recipe.serveTo}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
