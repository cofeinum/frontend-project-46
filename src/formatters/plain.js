const getPlainValue = (value) => {
  if (typeof value === 'object' && value !== null) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return `${value}`;
};

const getPlainFormat = (tree, path = '') => {
  const result = tree
    .filter((item) => item.status !== 'fixed')
    .map((item) => {
      const fullPath = path + item.key;
      switch (item.status) {
        case 'nested':
          return getPlainFormat(item.val, `${fullPath}.`);
        case 'added':
          return `Property '${fullPath}' was added with value: ${getPlainValue(item.val)}`;
        case 'changed':
          return `Property '${fullPath}' was updated. From ${getPlainValue(item.val1)} to ${getPlainValue(item.val2)}`;
        default:
          return `Property '${fullPath}' was removed`;
      }
    })
    .join('\n');

  return result;
};

export default getPlainFormat;
