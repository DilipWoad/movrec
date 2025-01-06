import {GoogleGenerativeAI} from "@google/generative-ai";

const googleGemini = async()=>{
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = "Explain how Pull ups helps building back muscles";

    const result = await model.generateContent(prompt);


    console.log(result?.response?.text())
    console.log(result?.response?.candidates[0]?.content?.parts[0]?.text)
    const ans = result?.response?.candidates[0]?.content?.parts[0]?.text;
    return ans;
}

export default googleGemini;

