import Colors from "@/services/Colors";
import GlobalApi from "@/services/GlobalApi";
import { Image } from "expo-image";
import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

const CategoryList = () => {
  const [categoryList, setcategoryList] = useState([]);

  useEffect(() => {
    console.log("Fetching categories...");
    GetCategoryList();
  }, []);

  const GetCategoryList = async () => {
    const result = await GlobalApi.GetCategories();
    setcategoryList(result.data.data);
    console.log("Categories fetched successfully");
  };

  return (
    <View
      style={{
        marginTop: 20,
      }}
    >
      <Text
        style={{
          color: Colors.PRIMARY,
          fontFamily: "interBold",
          fontSize: 24,
          textAlign: "center",
          marginBottom: 20,
          padding: 10,
          borderBottomWidth: 1,
          borderBottomColor: "#00FFAB",
          marginHorizontal: 20,
          marginTop: 20,
          borderRadius: 10,
          paddingVertical: 10,
          paddingHorizontal: 20,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
        }}
      >
        Category
      </Text>
      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={categoryList}
        renderItem={({ item, index }: any) => (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              margin: 10,
              backgroundColor: Colors.SURFACE,
              borderRadius: 30,
              borderColor: Colors.BORDER,
              borderWidth: 1,
            }}
          >
            <Image
              source={item?.image?.url}
              style={{
                width: 60,
                height: 60,
                borderRadius: 50,
                margin: 10,
              }}
            />
            <Text
              style={{
                color: "#00FFAB",
                fontFamily: "interBold",
                fontSize: 16,
                textAlign: "center",
                padding: 5,
                marginBottom: 10,
                borderRadius: 10,
              }}
            >
              {item?.name}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default CategoryList;
