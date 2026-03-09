export async function GET() {
  return new Response("SEAIL AI Manifest - Active", {
    status: 200,
    headers: { "Content-Type": "text/plain" },
  });
}
