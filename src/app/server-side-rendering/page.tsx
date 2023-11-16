// export const dynamic = 'force-static';
// export const fetchCache = 'force-cache';

import { RefreshButton } from './components/RefreshButton';

const getDateTime = async () => {
  const response = await fetch(
    'http://worldtimeapi.org/api/timezone/Asia/Tokyo',
    { cache: 'no-store' }, // SSRしたい場合はキャッシュを無効化する
  );
  const data = await response.json();

  return data.datetime as string;
};

export default async function ServerSideRenderingPage() {
  const time = await getDateTime();

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h2 className="text-2xl">Asia / Tokyo (SSR)</h2>
        <div className="font-mono text-4xl">{time}</div>
      </div>
      <RefreshButton />
      {/* <Suspense fallback={<div>loading...</div>}>
        <TokyoDateTime />
        <RefreshButton />
      </Suspense>
      <Suspense fallback={<div>loading...</div>}>
        <AustraliaDateTime />
        <RefreshButton />
      </Suspense> */}
    </div>
  );
}
