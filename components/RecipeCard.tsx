import Colors from "@/services/Colors";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default function RecipeCard({ recipe }: any) {
  const router = useRouter();
  if (!recipe) {
    console.warn("⚠️ Recipe is undefined");
    return null;
  }
  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: "/recipe-detail",
          params: {
            recipeData: JSON.stringify(recipe),
          },
        })
      }
      style={{
        backgroundColor: Colors.SURFACE, // Dark background for contrast
        padding: 16,
        borderRadius: 12,
        minHeight: 100,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: Colors.TEXT_MAIN,
          fontSize: 12,
          fontFamily: "interBold",
          textAlign: "center",
          borderBottomWidth: 1,
          borderBottomColor: "#00FFAB",
          marginBottom: 20,
          padding: 10,
        }}
      >
        {recipe?.recipeName ?? "No Name"}
      </Text>
      <Text
        style={{
          color: Colors.TEXT_MAIN,
          fontSize: 10,
          fontFamily: "interBold",
          textAlign: "center",
        }}
      >
        {recipe?.description ?? "No Name"}
      </Text>
    </TouchableOpacity>
  );
}
