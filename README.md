# QualityForward for Node.js

Node.jsで[QualityForward](https://cloud.veriserve.co.jp/)を操作するためのライブラリです。

## 使い方

## 初期化

```js
import { QualityForward, TestSuite} from 'qualityforward-node';
const client = new QualityForward(API_KEY);
```

## プロジェクト取得

```js
const project = await client.project.current();
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

## テストフェーズの取得

```js
const testPhases: TestPhase[] = await client.getTestPhases();
```

## テストフェーズの作成

```js
const testPhase: TestPhase = client.TestPhase();
testPhase.project_id = 748;
testPhase.name = 'test';
testPhase.start_on = new Date();
testPhase.end_on = new Date();
if (await testPhase.save()) {
  console.log(testPhase)
} else {
  console.log(testPhase.qf.error);
}
```

## ライセンス

MIT License
