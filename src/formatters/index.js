import getStylishFormat from './stylish.js';
import getPlainFormat from './plain.js';
import getJsonFormat from './json.js';

const formatTree = (tree, formatName) => {
  switch (formatName) {
    case 'plain':
      return getPlainFormat(tree);
    case 'stylish':
      return getStylishFormat(tree);
    case 'json':
      return getJsonFormat(tree);
    default:
      throw new Error(`Format '${formatName}' - is incorrect`);
  }
};

export default formatTree;
