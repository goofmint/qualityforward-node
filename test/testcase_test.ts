import * as dotenv from 'dotenv';
import * as assert from 'assert';

dotenv.config();
import { QualityForward, TestSuite} from '../index';

let client;

describe('テストケースのテスト', () => {
  before('クライアントの作成', () => {
    client = new QualityForward(process.env.API_KEY);
  });
  
  it('テストケースの作成', async () => {
    const testSuites: TestSuite[] = await client.getTestSuites();
    const count = testSuites.length;
    const testSuite: TestSuite = client.TestSuite();
    testSuite.name = 'APIから作成したテストスイート';
    testSuite.project_id = 748;
    testSuite.label_category1 = '機能カテゴリ';
    testSuite.use_category1 = true;
    testSuite.label_content1 = '環境';
    testSuite.use_content1 = true;
    testSuite.coverage_panel_column = null;
    const tsv = testSuite.version();
    tsv.name = 'バージョン1';
    testSuite.setVersion(tsv);
    await testSuite.save();
    assert.notEqual(testSuite.id, null);
    const testSuites2: TestSuite[] = await client.getTestSuites();
    assert.equal(count + 1, testSuites2.length);
    const testSuites4: TestSuite = (await client.getTestSuites({id: testSuite.id}))[0];
    assert.equal(await testSuite.destroy(), true);
    const testSuites3: TestSuite[] = await client.getTestSuites();
    assert.equal(count, testSuites3.length);
  });
  
  it('テストケースの作成が失敗', async () => {
    const testSuite: TestSuite = client.TestSuite();
    testSuite.project_id = 748;
    testSuite.label_category1 = '機能カテゴリ';
    testSuite.use_category1 = true;
    testSuite.label_content1 = '環境';
    testSuite.use_content1 = true;
    testSuite.coverage_panel_column = 1;
    if (await testSuite.save()) {
      assert.equal(testSuite.id, null);
    } else {
      assert.equal(testSuite.qf.error.code, 422);
    }
  });
  
  it('テストケースバージョンの取得', async () => {
    const testSuite: TestSuite = client.TestSuite();
    const ary = await testSuite.get();
    const versions = await ary[3].getVersions();
  });
  
  it('テストケースの取得', async function() {
    this.timeout(10000); // タイムアウト防止
    const testSuites: TestSuite[] = await client.getTestSuites();
    for (let key in testSuites) {
      const testSuite = testSuites[key];
      const versions = await testSuite.getVersions();
      if (versions.length === 0) continue;
      for (let k in versions) {
        const version = versions[k];
        const testCases = await version.getTestCases();
        if (testCases.length === 0) continue;
      }
    }
  });
});
