# github-user-time

[![NPM version](https://badgen.net/npm/v/github-user-time)](https://npmjs.com/package/github-user-time) [![NPM downloads](https://badgen.net/npm/dm/github-user-time)](https://npmjs.com/package/github-user-time) [![CircleCI](https://circleci.com/gh/sinchang/github-user-time.svg?style=shield)](https://circleci.com/gh/sinchang/github-user-time) [![codecov](https://codecov.io/gh/sinchang/github-user-time/branch/master/graph/badge.svg)](https://codecov.io/gh/sinchang/github-user-time)

## Install

```bash
yarn add github-user-time
```

## Usage

```js
const githubUserTime = require('github-user-time')

githubUserTime('sinchang', Token) // create token on https://locationiq.com
  .then(res => console.log(res)) //=> { timezone: 'Asia/Shanghai', time: '2019-02-22T15:03:13+08:00' }
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**github-user-time** © [sinchang](https://github.com/sinchang), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by sinchang with help from contributors ([list](https://github.com/sinchang/github-user-time/contributors)).

> [github.com/sinchang](https://github.com/sinchang) · GitHub [@sinchang](https://github.com/sinchang) · Twitter [@sinchangwen](https://twitter.com/sinchangwen)
