export const revalidate = 60;

export async function GET() {
  const time = new Date().toLocaleTimeString();
  // eslint-disable-next-line no-console
  console.log('APIが叩かれました: /api/get-time');

  return Response.json({ time: time });
}
