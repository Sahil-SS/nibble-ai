import Ingredients from "@/components/Ingredients";
import RecipeIntro from "@/components/RecipeIntro";
import Steps from "@/components/Steps";
import Colors from "@/services/Colors";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { FlatList, View } from "react-native";

export default function RecipeDetails() {
  const { recipeData } = useLocalSearchParams();
  const recipe = JSON.parse(recipeData as string);
  console.log(recipe);
  return (
    <FlatList
      data={[]}
      renderItem={() => null}
      ListHeaderComponent={
        <View
          style={{
            flex: 1,
            backgroundColor: Colors.BACKGROUND,
            padding: 20,
          }}
        >
          <RecipeIntro recipe={recipe} />
          <Ingredients ingredients={recipe?.ingredients} />
          <Steps steps={recipe?.steps} />
        </View>
      }
    />
  );
}
