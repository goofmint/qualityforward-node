/// <reference path="../typings/test_suite_assignment_result.d.ts" />

import { QualityForward, TestCycle } from '../index';

class TestSuiteAssignment {
  qf: QualityForward;
  id: number;
  test_phase_id: number;
  test_suite_version_id: number;
  
  constructor(qf: QualityForward) {
    this.qf = qf;
  }
  set(params: TestSuiteAssignmentResult): TestSuiteAssignment{
    for (let key in params) {
      if (['created_at', 'updated_at'].indexOf(key) > -1) {
        this[key] = new Date(params[key]);
      } else {
        this[key] = params[key];
      }
    }
    return this;
  }
  
  async getTestCycles() {
    const testCycle = new TestCycle(this.qf);
    testCycle.test_phase_id = this.test_phase_id;
    testCycle.test_suite_assignment_id = this.id;
    return await testCycle.get();
  }
}

export default TestSuiteAssignment;