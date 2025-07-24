import CategoryList from "@/components/CategoryList";
import CreateRecipe from "@/components/CreateRecipe";
import IntroHeader from "@/components/IntroHeader";
import Colors from "@/services/Colors";
import React from "react";
import { FlatList, ScrollView } from "react-native";

export default function Home() {
  return (
    <FlatList
      data={[]}
      renderItem={() => null}
      ListHeaderComponent={
        <ScrollView
          style={{
            height: "100%",
            backgroundColor: Colors.BACKGROUND,
            padding: 20,
          }}
        >
          {/* Intro */}
          <IntroHeader />
          {/* Recipe Generation */}
          <CreateRecipe />
          {/* Category Selection */}
          <CategoryList />
        </ScrollView>
      }
    />
  );
}
