import LoadingDialog from "@/components/LoadingDialog";
import RecipeCard from "@/components/RecipeCard";
import Colors from "@/services/Colors";
import GlobalApi from "@/services/GlobalApi";
import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

type Recipe = {
  attributes: any; // Replace 'any' with the correct type if known
};

const Explore = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [openLoading, setOpenLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setOpenLoading(true);
        const response = await GlobalApi.GetAllRecipes();
        console.log("📥 Recipes fetched:", response.data.data);
        setRecipes(response.data.data);
      } catch (error) {
        console.error("❌ Error fetching recipes:", error);
      } finally {
        setOpenLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: Colors.BACKGROUND }}>
      <LoadingDialog visible={openLoading} text="Loading.." />

      {!openLoading && (
        <View style={{ padding: 20 }}>
          <Text
            style={{
              color: "#00FFAB",
              fontFamily: "interBold",
              fontSize: 19,
              textAlign: "center",
              marginBottom: 20,
            }}
          >
            Explore Delicious Recipes 🍽️
          </Text>

          <FlatList
            data={recipes}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            renderItem={({ item }) => {
              return (
                <View style={{ flex: 1, margin: 5 }}>
                  <RecipeCard recipe={item} />
                </View>
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

export default Explore;
