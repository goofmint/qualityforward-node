import * as dotenv from 'dotenv';
const { parse } = require('json2csv');

dotenv.config();
import { QualityForward} from './index';

(async () => {
  const toDay = new Date;
  let result = [];
  const client = new QualityForward(process.env.API_KEY);
  const testPhases = await client.getTestPhases();
  for (const testPhase of testPhases) {
    for (const testSuiteAssignment of testPhase.test_suite_assignments) {
      const testCycles = await testSuiteAssignment.getTestCycles();
      for (const testCycle of testCycles) {
        const testResults = await testCycle.getTestResults();
        const ary = testResults.filter(t => {
          if (t.executed_at.getFullYear() === toDay.getFullYear() &&
              t.executed_at.getMonth() === toDay.getMonth() &&
              t.executed_at.getDate() === toDay.getDate()) {
                return t;
          }
        });
        Array.prototype.push.apply(result, ary);
      }
    }
  }
  const group = {};
  for (let testResult of result) {
    if (!group[testResult.result]) group[testResult.result] = 0;
    group[testResult.result]++;
  }
  console.log(`本日の作業結果`);
  for (let result in group) {
    console.log(`  ${result} : ${group[result]}件`);
  }
})();
