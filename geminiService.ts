
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Ensure the API key is strictly pulled from the environment without fallback strings 
// to avoid initialization issues in restricted environments.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getTenderSummary = async (tenderTitle: string, client: string): Promise<string> => {
  try {
    // Calling generateContent directly as per guidelines
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a short, professional "Plain Summary" for an engineering tender titled "${tenderTitle}" for the client "${client}". Keep it to 3-4 sentences focusing on technical excellence, structural integrity, and timeline management.`,
    });
    
    // Use the .text property directly
    return response.text || getDefaultSummary(tenderTitle, client);
  } catch (error) {
    // Silently log and provide a professional fallback summary to avoid breaking the UX
    console.error("Gemini API Error Detail:", error);
    return getDefaultSummary(tenderTitle, client);
  }
};

/**
 * Provides a professional, context-aware fallback summary if the API encounters 
 * an RPC error (500) or network failure.
 */
const getDefaultSummary = (title: string, client: string): string => {
  return `This engineering tender for ${client} focuses on the delivery of the ${title} project. The scope encompasses high-precision structural engineering and robust infrastructure development tailored to regional standards. Our proposed approach prioritizes strict compliance with safety regulations and efficient execution within the stated submission timelines.`;
};

export const getAIAssistantSteps = async (tenderTitle: string) => {
    // Simulated background process for assistant tasks
    return [
        { name: 'Context Analysis', detail: `Analyzed RFP for ${tenderTitle}.`, status: 'complete' },
        { name: 'Credential Verification', detail: 'Checked safety and insurance docs.', status: 'complete' },
        { name: 'Drafting Content', detail: 'Generating initial proposal drafts.', status: 'active' },
        { name: 'Review & Finalize', detail: 'Ready for human oversight.', status: 'pending' },
    ];
};
