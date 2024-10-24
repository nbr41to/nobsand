import { TimeForceCache } from './_components/TimeForceCache';

export default async function Page() {
  const response = await fetch('http://localhost:3000/api/get-time');
  const data = await response.json();

  return (
    <div>
      <h2>response cacheについて</h2>
      <div>raw data: {data.time}</div>
      <div>
        <TimeForceCache />
      </div>
    </div>
  );
}
