const getData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  const res = await fetch('https://jsonplaceholder.typicode.com/photos/1');
  const data = await res.json();

  return data;
};

export default async function PhotoViewer() {
  const photo = await getData();

  /* eslint-disable-next-line @next/next/no-img-element */
  return <img className="h-40 w-40" src={photo.url} alt="mock image" />;
}
