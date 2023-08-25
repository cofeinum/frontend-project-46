import { readFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const readFile = (filename) => readFileSync(resolve(__dirname, '..', '__fixtures__', filename), 'utf-8');

test('equal', () => {
  const pathJson1 = './__fixtures__/file1.json';
  const pathJson2 = './__fixtures__/file2.json';
  const pathYaml1 = './__fixtures__/file1.yaml';
  const pathYaml2 = './__fixtures__/file2.yaml';
  const result = readFile('result.txt');

  expect(genDiff(pathJson1, pathJson2)).toEqual(result);
  expect(genDiff(pathYaml1, pathYaml2)).toEqual(result);
  expect(genDiff(pathJson1, pathYaml2)).toEqual(result);
  expect(genDiff(pathYaml1, pathJson2)).toEqual(result);
});
