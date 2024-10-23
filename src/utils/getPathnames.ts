'use server';

import fs from 'fs';

export const getFileNames = async () => {
  const rootPath = 'src/app';
  const fileList = fs.readdirSync(rootPath);
  const generalFileList = fs.readdirSync(rootPath + '/(general)');
  const ignoreNames = ['providers'];

  return [...fileList, ...generalFileList]
    .filter(
      (file) =>
        !ignoreNames.includes(file) &&
        !file.startsWith('(') &&
        !file.endsWith('.tsx') &&
        !file.endsWith('.ico'),
    )
    .sort();
};
