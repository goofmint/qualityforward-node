/// <reference path="../typings/test_suite_version_result.d.ts" />

import { QualityForward, TestCase } from '../index';
import User from './user';

class TestSuiteVersion {
  qf: QualityForward;
  user: User;
  
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
    const ary: TestCase[] = [];
    return ary;
  }
}

export default TestSuiteVersion;
