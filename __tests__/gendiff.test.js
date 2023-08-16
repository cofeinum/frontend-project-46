import genDiff from '../src/index.js';

test('equal', () => {
  const pathJson1 = './__fixtures__/file1.json';
  const pathJson2 = './__fixtures__/file2.json';
  const pathYaml1 = './__fixtures__/file1.yaml';
  const pathYaml2 = './__fixtures__/file2.yaml';
  const result = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

  expect(genDiff(pathJson1, pathJson2)).toEqual(result);
  expect(genDiff(pathYaml1, pathYaml2)).toEqual(result);
});
