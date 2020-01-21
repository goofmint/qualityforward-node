import { QualityForward } from '../index';

class TestCase {
  qf: QualityForward;
  id: number;
  test_suite_version_id: number;
  no: number;
  priority: string;
  category1: string;
  category2: string;
  category3: string;
  category4: string;
  category5: string;
  category6: string;
  category7: string;
  category8: string;
  category9: string;
  category10: string;
  category11: string;
  category12: string;
  category13: string;
  category14: string;
  category15: string;
  category16: string;
  category17: string;
  category18: string;
  category19: string;
  category20: string;
  category21: string;
  category22: string;
  category23: string;
  category24: string;
  category25: string;
  created_at: Date;
  updated_at: Date;
  
  constructor(qf: QualityForward) {
    this.qf = qf;
  }
  
  async get(test_suite_id, test_suite_version_id) {
    const path = `/api/v2/test_suites/${test_suite_id}/test_suite_versions/${test_suite_version_id}/test_cases.json`;
    const url = this.qf.getUrl(path);
    const json = await this.qf.request.get(url);
    const ary: TestCase[] = [];
    for (let params of json.test_cases) {
      const tc = new TestCase(this.qf);
      tc.set(params);
      ary.push(tc);
    }
    return ary;
  }

  set(params): TestCase {
    for (let key in params) {
      if (['created_at', 'updated_at'].indexOf(key) > -1) {
        this[key] = new Date(params[key]);
      } else {
        this[key] = params[key];
      }
    }
    return this;
  }
}

export default TestCase;
