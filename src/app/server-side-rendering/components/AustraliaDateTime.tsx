import { RefreshButton } from '@/app/static-site-generation/components/RefreshButton';

const getDateTime = async () => {
  const response = await fetch(
    'http://worldtimeapi.org/api/timezone/Australia/Sydney',
  );
  const data = await response.json();

  return data.datetime as string;
};

export const AustraliaDateTime = async () => {
  const data = await getDateTime();

  return (
    <div className="space-y-2">
      <h2 className="text-2xl">Australia / Sydney (SSG)</h2>
      <div className="font-mono text-4xl">{data}</div>
      <RefreshButton />
    </div>
  );
};
