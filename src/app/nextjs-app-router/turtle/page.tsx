const dummyFetch = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return '🐢';
};

export default async function TurtlePage() {
  const turtle = await dummyFetch();

  return (
    <div>
      <div className="text-center text-8xl">{turtle} ... 🚗💫 😵</div>
    </div>
  );
}
