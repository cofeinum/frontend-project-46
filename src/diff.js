const isObject = (val) => (typeof val === 'object' && val !== null);

const getDiffTree = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const diffTree = [...keys1, ...keys2]
    .filter((value, index, array) => array.indexOf(value) === index)
    .sort()
    .map((key) => {
      if (isObject(obj1[key]) && isObject(obj2[key])) {
        return { key, status: 'nested', val: getDiffTree(obj1[key], obj2[key]) };
      }
      if (!Object.hasOwn(obj1, key)) {
        return { key, status: 'added', val: obj2[key] };
      }
      if (!Object.hasOwn(obj2, key)) {
        return { key, status: 'deleted', val: obj1[key] };
      }
      if (obj1[key] === obj2[key]) {
        return { key, status: 'fixed', val: obj1[key] };
      }
      return {
        key, status: 'changed', val1: obj1[key], val2: obj2[key],
      };
    });

  return diffTree;
};

export default getDiffTree;
