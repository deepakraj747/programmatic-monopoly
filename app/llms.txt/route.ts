import { createClient } from "@supabase/supabase-js";

export async function GET() {
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_KEY!
  );
  
  const { data: pages } = await supabase.from("pages").select("*").limit(100);
  
  return new Response("SEAIL AI Manifest - Active", {
    headers: { "Content-Type": "text/plain" },
  });
}
