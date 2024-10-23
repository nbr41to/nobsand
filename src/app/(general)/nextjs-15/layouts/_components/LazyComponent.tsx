export const LazyComponent = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return <div className="rounded border p-4">LazyComponent</div>;
};
