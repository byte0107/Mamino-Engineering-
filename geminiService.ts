
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

export const getTenderSummary = async (tenderTitle: string, client: string): Promise<string> => {
  try {
    // Check if process.env.API_KEY is available to avoid runtime crashes
    if (typeof process === 'undefined' || !process.env?.API_KEY) {
      console.warn("API_KEY environment variable is not defined.");
      return getDefaultSummary(tenderTitle, client);
    }

    // Initialize inside the function to prevent top-level script execution failure
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a short, professional "Plain Summary" for an engineering tender titled "${tenderTitle}" for the client "${client}". Keep it to 3-4 sentences focusing on technical excellence, structural integrity, and timeline management.`,
    });
    
    return response.text || getDefaultSummary(tenderTitle, client);
  } catch (error) {
    console.error("Gemini API Error Detail:", error);
    return getDefaultSummary(tenderTitle, client);
  }
};

/**
 * Provides a professional, context-aware fallback summary if the API encounters 
 * an RPC error (500) or network failure.
 */
const getDefaultSummary = (title: string, client: string): string => {
  return `Ena ke kakaretso ea thendara ea ${client} bakeng sa morero oa ${title}. Re shebile ho fana ka mosebetsi oa boleng bo phahameng o ipapisitseng le melao ea boenjiniere ea machaba. Sehlopha sa rona se ikemiselitse ho phethela mosebetsi ona ka nako e behiloeng le ka polokeho e feletseng.`;
};

export const getAIAssistantSteps = async (tenderTitle: string) => {
    return [
        { name: 'Context Analysis', detail: `Analyzed RFP for ${tenderTitle}.`, status: 'complete' },
        { name: 'Credential Verification', detail: 'Checked safety and insurance docs.', status: 'complete' },
        { name: 'Drafting Content', detail: 'Generating initial proposal drafts.', status: 'active' },
        { name: 'Review & Finalize', detail: 'Ready for human oversight.', status: 'pending' },
    ];
};
