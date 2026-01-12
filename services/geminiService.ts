import { GoogleGenAI, Type } from "@google/genai";

export const generateQuickGameIdea = async (theme: string) => {
  // Verificação segura para navegadores
  const getApiKey = () => {
    try {
      // @ts-ignore
      return typeof process !== 'undefined' && process.env ? process.env.API_KEY : (window as any).API_KEY;
    } catch {
      return undefined;
    }
  };

  const apiKey = getApiKey();

  if (!apiKey || apiKey === "undefined" || apiKey === "") {
    throw new Error("MISSING_API_KEY");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Proponha uma brincadeira criativa e rápida para o tema: "${theme}". 
      Foque em conexão pais e filhos e diversão offline. Responda apenas o JSON.`,
      config: {
        systemInstruction: "Você é um especialista em educação lúdica. Responda estritamente em formato JSON.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            materials: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            instructions: { type: Type.STRING }
          },
          required: ["title", "materials", "instructions"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("EMPTY_RESPONSE");

    return JSON.parse(text.trim());
  } catch (err) {
    console.error("Erro na chamada Gemini:", err);
    throw err;
  }
};