import { readFileSync } from 'fs';
import path from 'path';
import process from 'process';

const readFile = (filePath) => {
  const fullPath = path.resolve(process.cwd(), filePath);
  const data = readFileSync(fullPath).toString();
  return data;
};

export default readFile;
