const getDateTime = async () => {
  const response = await fetch(
    'http://worldtimeapi.org/api/timezone/Asia/Tokyo',
    { cache: 'no-store' }, // SSRしたい場合はキャッシュを無効化する
  );
  const data = await response.json();

  return data.datetime as string;
};

export const TokyoDateTime = async () => {
  const data = await getDateTime();

  return (
    <div className="space-y-2">
      <h2 className="text-2xl">Asia / Tokyo (SSR)</h2>
      <div className="font-mono text-4xl">{data}</div>
    </div>
  );
};
