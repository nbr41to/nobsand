import fs from 'fs';

import Link from 'next/link';

const getFileNames = () => {
  const rootPath = 'src/app';
  const fileList = fs.readdirSync(rootPath);
  const ignoreNames = ['providers'];

  return fileList.filter(
    (file) =>
      !ignoreNames.includes(file) &&
      !file.endsWith('.tsx') &&
      !file.endsWith('.ico'),
  );
};

export default function Home() {
  const fileList = getFileNames();

  return (
    <div className="">
      <h1 className="py-8 text-center font-baloo text-4xl">_MENU_</h1>
      <div className="mx-auto flex w-fit flex-col gap-2">
        {fileList.map((file) => (
          <Link
            key={file}
            className="font-mono text-2xl font-bold hover:underline"
            href={`/${file}`}
          >
            ~/{file}/
          </Link>
        ))}
      </div>
    </div>
  );
}
