import * as dotenv from 'dotenv';
import * as assert from 'assert';

dotenv.config();
import { QualityForward, TestPhase} from '../index';

let client;

describe('テストサイクルのテスト', () => {
  before('クライアントの作成', () => {
    client = new QualityForward(process.env.API_KEY);
  });
  
  it('テストサイクルの取得', async () => {
    const testPhases: TestPhase[] = await client.getTestPhases();
    for (let testPhase of testPhases) {
      if (testPhase.test_suite_assignments.length === 0) continue;
      const testSuiteAssignment = testPhase.test_suite_assignments[0];
      const testCycles = await testSuiteAssignment.getTestCycles();
      if (testCycles.length === 0) continue;
      const testResults = await testCycles[0].getTestResults();
      // console.log(testResults[0])
    }
  });
});