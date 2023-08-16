import yaml from 'js-yaml';

const getParse = (fileContent, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(fileContent);
    case 'yml':
    case 'yaml':
      return yaml.load(fileContent);
    default:
      throw new Error(`Format ${format} - is incorrect`);
  }
};

export default getParse;
