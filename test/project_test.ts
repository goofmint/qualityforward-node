import * as dotenv from 'dotenv';
import * as assert from 'assert';

dotenv.config();
import { QualityForward, Project} from '../index';

let client;

describe('プロジェクトのテスト', () => {
  before('クライアントの作成', () => {
    client = new QualityForward(process.env.API_KEY);
  });
  
  it('プロジェクトの取得', async () => {
    const project = await client.project.current();
    assert.notEqual(project.id, null);
  });
  
});
