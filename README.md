### Status:

[![Actions Status](https://github.com/cofeinum/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/cofeinum/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/23de5aa02bd1e81f63e7/maintainability)](https://codeclimate.com/github/cofeinum/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/23de5aa02bd1e81f63e7/test_coverage)](https://codeclimate.com/github/cofeinum/frontend-project-46/test_coverage)

### Description

**Gendiff** - is a program that determines the difference between two data structures. Can work with json and yaml/yml files.

### Install

1. Clone repository local
```bash
git clone git@github.com:cofeinum/frontend-project-46.git
```
2. Install all dependencies 
```bash
npm ci
```
3. Install  apps global
```bash
npm link
```
4. Run app with command:
```bash
gendiff <filepath1>filename1.json <filepath2>filename2.yaml
```
where `<filepath>` - absolute or relative file path

By default using 'stylish' output format of difference. For another output format, use the flag `-f` or `--format` with next values:
+ `stylish` - using by default
+ `plain` - for line-by-line output of the difference
+ `json`  - for json output of the difference

## Run tests

```bash
make test
```

### Show works and test result:

[![asciicast](https://asciinema.org/a/605332.svg)](https://asciinema.org/a/605332)
