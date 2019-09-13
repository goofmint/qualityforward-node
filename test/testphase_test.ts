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
  
  it('テストフェーズの作成', async () => {
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
  });
  
  it('テストフェーズの作成が失敗', async () => {
  });
});
