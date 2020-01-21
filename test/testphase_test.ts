import * as dotenv from 'dotenv';
import * as assert from 'assert';

dotenv.config();
import { QualityForward, TestPhase} from '../index';

let client;

describe('テストフェーズのテスト', () => {
  before('クライアントの作成', () => {
    client = new QualityForward(process.env.API_KEY);
  });
  
  it('テストフェーズの検索', async () => {
    const testPhases: TestPhase[] = await client.getTestPhases();
    assert.notEqual(testPhases.length, 0);
  });
  
  it('テストフェーズの作成', async function() {
    this.timeout(10000); // タイムアウト防止
    
    const testPhase: TestPhase = client.TestPhase();
    testPhase.project_id = 748;
    testPhase.name = 'test';
    testPhase.start_on = new Date();
    testPhase.end_on = new Date();
    const tsv = client.TestSuiteVersion();
    tsv.id = 13290;
    testPhase.test_suite_versions.push(tsv);
    if (await testPhase.save()) {
      assert.equal(testPhase.id, testPhase.test_suite_assignments[0].test_phase_id);
    } else {
      console.log(testPhase.qf.error);
    }
  });
  
  it('テストフェーズの作成が失敗', async () => {
  });
});
