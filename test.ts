import * as dotenv from 'dotenv';
const { parse } = require('json2csv');

dotenv.config();
import { QualityForward} from './index';

(async () => {
  const client = new QualityForward(process.env.API_KEY);
  const testSuites = await client.getTestSuites();
  const csv = parse(testSuites.map(s => s.toJSON()), {});
  console.log(csv);
})();
