import fs from 'fs';

const ignoreList = ['api', '_app', '_document', 'index'];

export const createPagePaths = () => {
  const fileList = fs.readdirSync('./pages');
  return fileList
    .map((file) => {
      return file.replace('.tsx', '');
    })
    .filter((file) => !ignoreList.includes(file));
};
