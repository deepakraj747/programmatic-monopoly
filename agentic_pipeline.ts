import FirecrawlApp from "@mendable/firecrawl-js";
import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";

const firecrawl = new FirecrawlApp({ apiKey: process.env.FIRECRAWL_API_KEY! });
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });
const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_KEY!);

export async function runPipeline() {
  console.log("Pipeline Running...");
  // Logic for discovery and extraction goes here
}