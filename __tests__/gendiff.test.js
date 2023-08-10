import genDiff from '../src/index.js';

test('equal', () => {
  const path1 = './__fixtures__/file1.json';
  const path2 = './__fixtures__/file2.json';
  const result = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

  expect(genDiff(path1, path2)).toEqual(result);
});
