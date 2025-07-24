const prompt = {
  GENERATE_OPTION_PROMPT: `
Generate 3 different recipe variations based on the given user query.

Each recipe must include:
- recipeName (with an emoji)
- description (2 lines only)
- ingredients (an array of strings; just names, no sizes)

Respond strictly in the following JSON format:

{
  "recipes": [
    {
      "recipeName": "🍝 Creamy Tomato Pasta",
      "description": "A delicious and creamy pasta dish with a rich tomato flavor.",
      "ingredients": ["pasta", "tomato", "cream"]
    },
    {
      "recipeName": "🌶️ Spicy Sausage Pasta",
      "description": "A bold and hearty pasta dish packed with spicy sausage and vegetables.",
      "ingredients": ["sausage", "pasta", "bell peppers"]
    },
    {
      "recipeName": "🧄 Garlic Butter Shrimp Pasta",
      "description": "Succulent shrimp tossed in garlic butter sauce over al dente pasta.",
      "ingredients": ["shrimp", "garlic", "butter", "pasta"]
    }
  ]
}
`,

  GENERATE_COMPLETE_RECIPE: `
  - As per recipe Name and Description, Give me all list of ingredients as ingredient,
  - emoji icons for each ingredient as icon, quantity as quantity, along with detail step by step recipe as steps
  - Total Calories as calories (only number), Minutes to cook as cookTime and serving number as serveTo
  - realistic image Text prompt as per recipe as imagePrompt
  - Give me response in JSON format only
`,
};

export default prompt;
