/* データ取得に時間のかかるServerComponentを想定 */
export const LazyComponent = async () => {
  await await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <div className="flex h-40 w-48 flex-col items-center justify-center gap-4 rounded-lg border font-bold">
      <div className="text-6xl">🦥💦</div>
      <p>Loading completed.</p>
    </div>
  );
};

export const LazySkelton = () => {
  return (
    <div className="flex h-40 w-48 animate-pulse flex-col items-center justify-center gap-4 rounded-lg bg-slate-500/60 font-bold">
      <p>Loading...</p>
      <div className="text-6xl">💤</div>
    </div>
  );
};
