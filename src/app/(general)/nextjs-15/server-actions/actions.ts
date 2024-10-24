'use server';

import { neon } from '@neondatabase/serverless';
import 'server-only';

export async function create(formData: FormData) {
  const sql = neon(process.env.DATABASE_URL!);
  await sql`CREATE TABLE IF NOT EXISTS comments (comment TEXT)`;
  const comment = formData.get('comment');
  await sql('INSERT INTO comments (comment) VALUES ($1)', [comment]);
}
