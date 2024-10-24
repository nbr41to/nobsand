import { neon } from '@neondatabase/serverless';

async function getData() {
  const sql = neon(process.env.NEON_DATABASE_URL!);
  const response = await sql`SELECT version()`;

  return response[0].version;
}

export default async function Page() {
  const data = await getData();

  return (
    <div>
      <h2>Neon DB</h2>
      <div>
        <pre>
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      </div>
    </div>
  );
}
