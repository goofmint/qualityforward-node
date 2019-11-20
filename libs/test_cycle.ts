/// <reference path="../typings/test_cycle_result.d.ts" />

import { QualityForward } from '../index';

class TestCycle {
  qf: QualityForward;
  id: number;
  test_suite_assignment_id: number;
  test_phase_id: number;
  status: string;
  name: string;
  target_priorities: string[]
  start_on: Date;
  end_on: Date;
  created_at: Date;
  updated_at: Date;
  
  constructor(qf: QualityForward) {
    this.qf = qf;
  }
  
  async get() {
    const path = `/api/v2/test_phases/${this.test_phase_id}/test_suite_assignments/${this.test_suite_assignment_id}/test_cycles.json`;
    const url = this.qf.getUrl(path);
    const json: TestCycleResults = await this.qf.request.get(url);
    const ary: TestCycle[] = [];
    for (let params of json.test_cycles) {
      const tc = new TestCycle(this.qf);
      tc.set(params);
      ary.push(tc);
    }
    return ary;
  }

  set(params: TestCycleResult): TestCycle {
    for (let key in params) {
      if (['created_at', 'updated_at', 'start_on', 'end_on'].indexOf(key) > -1) {
        this[key] = new Date(params[key]);
      } else {
        this[key] = params[key];
      }
    }
    return this;
  }
}

export default TestCycle;
