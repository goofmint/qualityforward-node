/// <reference path="../typings/test_suite_version_result.d.ts" />

import { QualityForward, TestCase } from '../index';
import User from './user';

class TestSuiteVersion {
  qf: QualityForward;
  id: number;
  user: User;
  test_suite_id: number;
  name: string;
  status: string;
  note: string;
  latest_test_cycle_duration_sec: number;
  lock: boolean;
  lock_memo: string;
  created_at: Date;
  updated_at: Date;
    
  constructor(qf: QualityForward) {
    this.qf = qf;
  }

  set(params: TestSuiteVersionResult): TestSuiteVersion{
    for (let key in params) {
      if (['created_at', 'updated_at'].indexOf(key) > -1) {
        this[key] = new Date(params[key]);
      } else if (key === 'user') {
        this.user = new User;
        this.user.set(params[key]);
      } else {
        this[key] = params[key];
      }
    }
    return this;
  }
  
  async getTestCases(): Promise<TestCase[]> {
    return await this.qf.testCase.get(this.test_suite_id, this.id);
  }
}

export default TestSuiteVersion;
