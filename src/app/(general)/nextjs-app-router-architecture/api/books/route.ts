import data from '../../fixtures/books.json';

export async function GET() {
  return Response.json({ data });
}
