import readFile from './read-file.js';
import getParse from './parser.js';
import getDiffTree from './diff.js';
import formatTree from './formatters/index.js';

const genDiff = (path1, path2, formatName = 'stylish') => {
  const data1 = readFile(path1);
  const data2 = readFile(path2);

  const format1 = path1.split('.').at(-1);
  const format2 = path2.split('.').at(-1);

  const object1 = getParse(data1, format1);
  const object2 = getParse(data2, format2);

  const diffTree = getDiffTree(object1, object2);

  return formatTree(diffTree, formatName);
};

export default genDiff;
