import getStylishFormat from './stylish.js';
import getPlainFormat from './plain.js';

const formatTree = (tree, formatName) => {
  switch (formatName) {
    case 'plain':
      return getPlainFormat(tree);
    case 'stylish':
      return getStylishFormat(tree);
    default:
      throw new Error(`Format '${formatName}' - is incorrect`);
  }
};

export default formatTree;
