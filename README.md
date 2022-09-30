# adjustimer-analytics-api

## OverView

adjustimerで動画を同期させた情報のAPI

## Description

動画URL、動画タイトル等を集計する目的のもの。userIdは1ユーザが連続で同期させることを考慮したもので、ユーザ個人を特定する情報ではない。

## Requirement

- node v18.9.1
- npm 8.19.2

## Installing

```
git clone https://github.com/patioglass/adjustimer-analytics-api.git
npm install
```
## Test

```
npm run test
```

## Usage

```
npm run build

export MARIADB_PASS=hoge
export MARIADB_USER=fuga

node dist/index.js
```

# License

This software is released under the MIT License, see LICENSE.txt