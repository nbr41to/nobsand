const getText = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return 'this is server component';
};

export const ServerComponent = async () => {
  const text = await getText();

  return (
    <div className="h-48 w-48 rounded border">
      <h3 className="border-b py-1 text-center text-xl">Server Component</h3>
      <p className="p-3">
        {text}
        <br />
        テキストの取得に5秒かかりました
      </p>
    </div>
  );
};
