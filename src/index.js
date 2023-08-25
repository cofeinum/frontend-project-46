import readFile from './read-file.js';
import getParse from './parser.js';

const hasObject = (val) => (typeof val === 'object' && val !== null);

const diff = (obj1, obj2, depth = 0) => {
  const object1 = obj1;
  const object2 = hasObject(obj2) ? obj2 : obj1;

  const nextDepth = depth + 1;
  const marginSymbol = ' ';
  const marginLines = marginSymbol.repeat((depth + 1) * 4 - 2);
  const marginLast = marginSymbol.repeat(depth * 4);

  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  const result = [...keys1, ...keys2]
    .filter((value, index, array) => array.indexOf(value) === index)
    .sort()
    .flatMap((key) => {
      const items = [];
      switch (true) {
        // is only in the second `+ qwe: rty`
        case !Object.hasOwn(object1, key):
          items.push({
            sign: '+',
            val: hasObject(object2[key]) ? diff(object2[key], null, nextDepth) : object2[key],
          });
          break;
        // is only in the first `- qwe: rty`
        case !Object.hasOwn(object2, key):
          items.push({
            sign: '-',
            val: hasObject(object1[key]) ? diff(object1[key], null, nextDepth) : object1[key],
          });
          break;
        // are in both and values are objects
        case hasObject(object1[key]) && hasObject(object2[key]):
          items.push({
            sign: ' ',
            val: diff(object1[key], object2[key], nextDepth),
          });
          break;
        // is in both and the values are the same (not objects!)
        case object1[key] === object2[key]:
          items.push({
            sign: ' ',
            val: object1[key],
          });
          break;
        // exists in both objects and the values do NOT match
        default:
          items.push({
            sign: '-',
            val: hasObject(object1[key]) ? diff(object1[key], null, nextDepth) : object1[key],
          }, {
            sign: '+',
            val: hasObject(object2[key]) ? diff(object2[key], null, nextDepth) : object2[key],
          });
      }
      return items.map((item) => `${marginLines}${item.sign} ${key}: ${item.val}`);
    });

  return ['{', ...result, `${marginLast}}`].join('\n');
};

const genDiff = (path1, path2) => {
  const data1 = readFile(path1);
  const data2 = readFile(path2);

  const format1 = path1.split('.').at(-1);
  const format2 = path2.split('.').at(-1);

  const object1 = getParse(data1, format1);
  const object2 = getParse(data2, format2);

  return diff(object1, object2);
};

export default genDiff;
