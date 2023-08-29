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
  const resultStylish = readFile('test_result_stylish.txt');
  const resultPlain = readFile('test_result_plain.txt');

  expect(genDiff(pathJson1, pathJson2)).toEqual(resultStylish);
  expect(genDiff(pathYaml1, pathYaml2)).toEqual(resultStylish);
  expect(genDiff(pathJson1, pathYaml2, 'stylish')).toEqual(resultStylish);
  expect(genDiff(pathYaml1, pathJson2, 'stylish')).toEqual(resultStylish);

  expect(genDiff(pathJson1, pathJson2, 'plain')).toEqual(resultPlain);
  expect(genDiff(pathYaml1, pathYaml2, 'plain')).toEqual(resultPlain);
});
