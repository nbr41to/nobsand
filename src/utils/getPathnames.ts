import fs from 'fs';

export const getFileNames = () => {
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
