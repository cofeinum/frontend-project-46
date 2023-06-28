import readFile from './read-file.js';

const genDiff = (path1, path2) => {
  const data1 = readFile(path1);
  const data2 = readFile(path2);

  const object1 = JSON.parse(data1);
  const object2 = JSON.parse(data2);

  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  const result = [...keys1, ...keys2]
    .filter((value, index, array) => array.indexOf(value) === index)
    .sort()
    .flatMap((key) => {
      if (!Object.hasOwn(object1, key)) {
        return `+ ${key}: ${object2[key]}`;
      }
      if (!Object.hasOwn(object2, key)) {
        return `- ${key}: ${object1[key]}`;
      }
      if (object1[key] === object2[key]) {
        return `  ${key}: ${object1[key]}`;
      }
      return [
        `- ${key}: ${object1[key]}`,
        `+ ${key}: ${object2[key]}`,
      ];
    });

  //console.log(`{\n  ${result.join('\n  ')}\n}`);
  return `{\n  ${result.join('\n  ')}\n}`;
};

export default genDiff;
