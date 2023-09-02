import { readFileSync } from 'fs';
import path from 'path';
import process from 'process';

const readFile = (filePath) => {
  const fullPath = path.resolve(process.cwd(), filePath);
  return readFileSync(fullPath).toString();
};

export default readFile;
