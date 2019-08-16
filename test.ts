import * as dotenv from 'dotenv';
dotenv.config();
import { QualityForward, TestSuite} from './index';

(async () => {
  const client = new QualityForward(process.env.API_KEY);
  /*
  const testSuite: TestSuite = client.TestSuite();
  testSuite.name = 'Test suite test 12';
  testSuite.project_id = 748;
  testSuite.label_category1 = '機能カテゴリ';
  testSuite.use_category1 = true;
  testSuite.label_content1 = '環境';
  testSuite.use_content1 = true;
  testSuite.coverage_panel_column = 1;
  // await testSuite.save();
  // console.log(testSuite);
  */
  const testSuites: TestSuite[] = await client.getTestSuites();
  const testSuite: TestSuite = testSuites[0];
  //console.log(testSuite);
  console.log(testSuites.length);
  console.log(testSuite.name)
  // testSuite.name = 'テストの更新5';
  if (await testSuite.destroy()) {
    console.log('削除成功');
  } else {
    console.log('削除失敗');
  }
})();
