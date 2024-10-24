export const revalidate = 60;

export async function GET() {
  const time = new Date().toLocaleTimeString();

  return Response.json({ time: time });
}
