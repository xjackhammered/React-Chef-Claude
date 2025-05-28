import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ClaudeRecipe({ ingredients }) {
  const [recipe, setRecipe] = useState("Generating recipe...");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getRecipe() {
      try {
        const prompt = `### Instruction: Create a detailed recipe using ONLY the following ingredients: ${ingredients.join(", ")}.`;

        const response = await axios.post(
          "https://api-inference.huggingface.co/models/HuggingFaceH4/zephyr-7b-beta",
          { inputs: prompt },
          {
            headers: {
              Authorization: `Bearer YOUR_API_KEY`,
              "Content-Type": "application/json",
            },
          }
        );

        const generatedText = response.data?.[0]?.generated_text;
        setRecipe(generatedText || "No recipe generated.");
      } catch (error) {
        console.error("Error fetching recipe:", error);
        setRecipe("Failed to generate recipe.");
      } finally {
        setLoading(false);
      }
    }

    if (ingredients.length > 0) {
      getRecipe();
    }
  }, [ingredients]);

  return (
    <div className="p-6 bg-white rounded-xl shadow-md mt-10 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">AI-Generated Recipe</h2>
      {loading ? <p>Loading...</p> : <pre className="whitespace-pre-wrap">{recipe}</pre>}
    </div>
  );
}
