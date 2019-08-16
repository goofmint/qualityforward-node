# QualityForward for Node.js

Node.jsで[QualityForward](https://cloud.veriserve.co.jp/)を操作するためのライブラリです。

## 使い方

## 初期化

```js
import { QualityForward, TestSuite} from 'qualityforward-node';
const client = new QualityForward(API_KEY);
```

## テストスイート取得

```js
const testSuites: TestSuite[] = await client.getTestSuites();
const testSuite: TestSuite = testSuites[0];
```

## テストスイート作成、更新

```js
testSuite.name = '新しいテストツイート名';
if (await testSuite.save()) {
  // 作成、更新成功
} else {
  // 作成、更新失敗
}
```

## テストスイート削除

```js
if (await testSuite.destroy()) {
  // 削除成功
} else {
  // 削除失敗
}
```

## ライセンス

MIT License
