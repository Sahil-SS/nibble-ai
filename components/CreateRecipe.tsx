import Colors from "@/services/Colors";
import GlobalApi from "@/services/GlobalApi";
import prompt from "@/services/Prompt"; // make sure your prompt file is imported correctly
import { Image } from "expo-image";
import React, { useRef, useState } from "react";
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";
import LoadingDialog from "./LoadingDialog";

const CreateRecipe = () => {
  const [userInput, setUserInput] = useState("");
  const [recipe, setRecipe] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const actionSheetRef = useRef<ActionSheetRef>(null);
  const [openLoading, setOpenLoading] = useState(false);

  const onGenerateRecipe = async () => {
    if (!userInput) {
      alert("Please enter your craving or recipe idea.");
      return;
    }

    setLoading(true);
    console.log("Calling AI to generate recipe options...");

    try {
      const aiPrompt = `${prompt.GENERATE_OPTION_PROMPT}\nUser Query: "${userInput}"`;

      const aiResponse = await GlobalApi.AiModel(aiPrompt);
      const parsed = JSON.parse(aiResponse.choices[0].message.content ?? "{}");

      console.log("AI Recipe Options:", parsed);
      setRecipe(parsed.recipes || []);
      actionSheetRef.current?.show();
    } catch (err) {
      console.error("❌ AI error in onGenerateRecipe:", err);
      alert("Something went wrong generating recipes. Try again.");
    }

    setLoading(false);
  };

  const GenerateCompleteRecipe = async (option: any) => {
    actionSheetRef.current?.hide();
    setOpenLoading(true);

    try {
      const aiPrompt = `
Recipe Name: ${option.recipeName}
Description: ${option.description}
${prompt.GENERATE_COMPLETE_RECIPE}
`;

      const aiResponse = await GlobalApi.AiModel(aiPrompt);
      const fullRecipe = JSON.parse(
        aiResponse.choices[0].message.content ?? "{}"
      );

      console.log("✅ AI Full Recipe:", fullRecipe);

      // Image Generation Code
      const imageUrl = await GlobalApi.GenerateAiImage(fullRecipe.imagePrompt);
      fullRecipe.imageUrl = imageUrl;

      const result = await saveDB(fullRecipe);
      console.log("✅ Saved to DB:", result);
    } catch (err) {
      console.error("❌ Error in GenerateCompleteRecipe:", err);
      alert("Something went wrong fetching complete recipe.");
    }

    setOpenLoading(false);
  };

  const saveDB = async (content: any) => {
    const data = {
      ...content,
      // imageUrl: content.imageUrl,
      // userEmail: "your@email.com", // If needed
    };

    try {
      const result = await GlobalApi.createNewRecipe({ ...data });
      console.log("✅ Recipe saved successfully:", result.data);
      return result;
    } catch (error: any) {
      console.log(
        "❌ Error saving recipe to Strapi:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <View
      style={{
        marginTop: 20,
        paddingVertical: 24,
        paddingHorizontal: 20,
        backgroundColor: Colors.SURFACE,
        borderRadius: 30,
        alignItems: "center",
        borderColor: Colors.BORDER,
        borderWidth: 1,
      }}
    >
      <Image
        source={require("./../assets/images/pan.gif")}
        style={{
          width: 90,
          height: 90,
          borderRadius: 18,
        }}
        contentFit="contain"
      />

      <Text
        style={{
          fontFamily: "interBold",
          fontSize: 20,
          color: Colors.TEXT_MAIN,
          textAlign: "center",
          marginTop: 20,
          textShadowRadius: 5,
          textShadowColor: Colors.PRIMARY,
        }}
      >
        Feed me your cravings, I’ll feed you a recipe! 🍳
      </Text>

      <Text
        style={{
          fontFamily: "Inter",
          fontSize: 16,
          color: Colors.TEXT_MUTED,
          textAlign: "center",
          marginTop: 12,
          lineHeight: 22,
          paddingHorizontal: 4,
        }}
      >
        Cook what you love 🧑‍🍳❤️ Or let me guess it for you 🤖
      </Text>

      <TextInput
        placeholder="Tell me what you're craving...🍜🥑🧠"
        placeholderTextColor={Colors.TEXT_MUTED}
        style={{
          backgroundColor: Colors.SURFACE,
          borderRadius: 15,
          borderWidth: 1,
          borderColor: Colors.BORDER,
          padding: 16,
          width: "100%",
          marginTop: 20,
          color: Colors.TEXT_MAIN,
          fontSize: 18,
          fontFamily: "interMedium",
          textAlignVertical: "top",
          minHeight: 100,
          textAlign: "center",
        }}
        multiline={true}
        onChange={(e) => setUserInput(e.nativeEvent.text)}
      />

      <TouchableOpacity
        style={{
          marginTop: 30,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
        onPress={() => onGenerateRecipe()}
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
            width: "70%",
            color: Colors.BACKGROUND,
          }}
        >
          {loading ? <ActivityIndicator color="black" /> : "Generate Recipe!"}
        </Text>
      </TouchableOpacity>

      <LoadingDialog visible={openLoading} text="Loading.." />

      <ActionSheet ref={actionSheetRef}>
        <View
          style={{
            padding: 20,
            backgroundColor: Colors.BACKGROUND,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              marginBottom: 20,
              textAlign: "center",
              color: Colors.TEXT_MAIN,
              padding: 10,
              fontFamily: "interBold",
              borderBottomWidth: 1,
              borderBottomColor: "#00FFAB",
            }}
          >
            Recipe Options
          </Text>
          <View style={{ gap: 12 }}>
            {recipe.map((item: any, index: any) => (
              <TouchableOpacity
                onPress={() => GenerateCompleteRecipe(item)}
                key={index}
                style={{
                  marginBottom: 10,
                  paddingHorizontal: 14,
                  paddingVertical: 12,
                  borderRadius: 12,
                  backgroundColor: Colors.SURFACE,
                  borderWidth: 1,
                  borderColor: Colors.BORDER,
                  shadowColor: "#000",
                  shadowOpacity: 0.05,
                  shadowOffset: { width: 0, height: 1 },
                  shadowRadius: 2,
                }}
              >
                <Text
                  style={{
                    color: Colors.TEXT_MAIN,
                    fontFamily: "interBold",
                    fontSize: 18,
                    marginBottom: 6,
                    textAlign: "center",
                  }}
                >
                  {item.recipeName}
                </Text>
                <Text
                  style={{
                    color: Colors.TEXT_MUTED,
                    fontFamily: "Inter",
                    fontSize: 16,
                    textAlign: "center",
                  }}
                >
                  {item.description}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ActionSheet>
    </View>
  );
};

export default CreateRecipe;
