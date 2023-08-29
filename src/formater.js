const getLinesIndent = (depth, symbol = ' ', step = 4) => symbol.repeat(step * depth - 2);
const getLastIndent = (depth, symbol = ' ', step = 4) => symbol.repeat(step * depth - step);

const getValToString = (value, depth = 1) => {
  if (typeof value !== 'object' || value === null) {
    return `${value}`;
  }
  const result = Object.entries(value)
    .map(([key, val]) => `${getLinesIndent(depth)}  ${key}: ${getValToString(val, depth + 1)}`);

  return ['{', ...result, `${getLastIndent(depth)}}`].join('\n');
};

const getStylishFormat = (tree, depth = 1) => {
  const result = tree
    .flatMap((item) => {
      switch (item.status) {
        case 'nested':
          return `  ${item.key}: ${getStylishFormat(item.val, depth + 1)}`;
        case 'added':
          return `+ ${item.key}: ${getValToString(item.val, depth + 1)}`;
        case 'deleted':
          return `- ${item.key}: ${getValToString(item.val, depth + 1)}`;
        case 'changed':
          return [
            `- ${item.key}: ${getValToString(item.val1, depth + 1)}`,
            `+ ${item.key}: ${getValToString(item.val2, depth + 1)}`,
          ];
        default:
          return `  ${item.key}: ${getValToString(item.val, depth + 1)}`;
      }
    })
    .map((item) => `${getLinesIndent(depth)}${item}`);

  return ['{', ...result, `${getLastIndent(depth)}}`].join('\n');
};

const formatTree = (tree, format) => {
  switch (format) {
    case 'stylish':
      return getStylishFormat(tree);
    default:
      throw new Error(`Format '${format}' - is incorrect`);
  }
};

export default formatTree;
