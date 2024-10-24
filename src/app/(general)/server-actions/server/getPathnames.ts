'use server';

import fs from 'fs';

// use server の関数は async にする必要がある
export const getFileNames = async () => {
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
