import { QualityForward, TestCase, User } from '../index';

class TestResult {
  qf: QualityForward;
  id: number;
  user: User;
  test_case_id: number;
  test_case_no: number;
  test_cycle_id: number;
  result: string;
  result_supplement: string;
  executed_at: Date;
  content1: string;
  content2: string;
  content3: string;
  created_at: Date;
  updated_at: Date;
    
  constructor(qf: QualityForward) {
    this.qf = qf;
  }
  
  async get(test_phase_id, test_suite_assignment_id, test_cycle_id): Promise<TestResult[]> {
    const path = `/api/v2/test_phases/${test_phase_id}/test_suite_assignments/${test_suite_assignment_id}/test_cycles/${test_cycle_id}/test_results.json`;
    const url = this.qf.getUrl(path);
    const json = await this.qf.request.get(url);
    const ary:TestResult[] = [];
    for (const params of json.test_results) {
      const tr = new TestResult(this.qf);
      tr.set(params);
      ary.push(tr);
    }
    return ary;
  }

  set(params): TestResult {
    for (let key in params) {
      if (['created_at', 'updated_at', 'executed_at', 'start_on', 'end_on'].indexOf(key) > -1) {
        this[key] = new Date(params[key]);
      } else {
        this[key] = params[key];
      }
    }
    return this;
  }
}

export default TestResult